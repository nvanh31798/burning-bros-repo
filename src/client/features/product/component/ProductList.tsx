import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../core/redux/store/store";
import { getAllProducts } from "../../../../core/redux/thunks/product/productAsynThunk";
import InfiniteScroll from "react-infinite-scroll-component";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, total, isSearching } = useAppSelector(
    (state) => state.product
  );
  const [skip, setSkip] = useState(0);
  const SKIP_VALUE = 20;

  const getProducts = (skip: number) => {
    if (isSearching) {
        return;
    }
    dispatch(getAllProducts({ skip: skip }));
  };

  const renderLoadingIdicator = () => {
    return <p>Loading...</p>;
  };

  const renderEndMessage = () => {
    return <p>No more data to load.</p>;
  };

  useEffect(() => {
    getProducts(skip);
  }, [skip]);

  return (
    <div>
      <InfiniteScroll
        pullDownToRefresh={true}
        refreshFunction={() => console.log("Product List refresh")}
        dataLength={products?.length ?? 0}
        pullDownToRefreshThreshold={250}
        next={() => setSkip((prevSkip) => prevSkip + SKIP_VALUE)}
        hasMore={products?.length <= total!}
        loader={renderLoadingIdicator()}
        endMessage={renderEndMessage()}
      >
        <div className="container-fluid">
          <div className="row">
            {products?.map((item) => (
              <div className="col mt-5">
                <ProductItem product={item} />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
