import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import CircularProgress from "@mui/material/CircularProgress";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../../core/redux/store/store";
import {
  getAllProducts,
  searchProducts,
} from "../../../../core/redux/thunks/product/productAsynThunk";
import InfiniteScroll from "react-infinite-scroll-component";
import { ActionStatusEnum } from "../../../../core/redux/models/ActionStatusEnum";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, total, searchValue, fetchStatus, isSearching } =
    useAppSelector((state) => state.product);
  const [skip, setSkip] = useState(0);
  const SKIP_VALUE = 20;

  const getProducts = (skip: number) => {
    if (!searchValue || !searchValue.length) {
      dispatch(getAllProducts({ skip: skip }));
      return;
    }
    dispatch(searchProducts({ value: searchValue, skip: skip }));
  };

  const renderLoadingIdicator = () => {
    if (fetchStatus === ActionStatusEnum.Pending) {
      return (
        <div className="d-flex justify-content-center py-3">
          <CircularProgress />
        </div>
      );
    }
    return (
      <div className="d-flex justify-content-center py-3">
        <p className="fs-6 mx-auto">Loading More ...</p>
      </div>
    );
  };

  const renderEndMessage = () => {
    return (
      <div className="d-flex justify-content-center py-3">
        <p className="fs-6 mx-auto">No more data to load.</p>
      </div>
    );
  };

  useEffect(() => {
    if (isSearching) {
      return;
    }
    getProducts(skip);
  }, [skip, isSearching]);

  useEffect(() => {
    console.log("searching");
    setSkip(0);
  }, [isSearching]);

  return (
    <div>
      <InfiniteScroll
        pullDownToRefresh={true}
        refreshFunction={() => getProducts(skip)}
        dataLength={products?.length ?? 0}
        pullDownToRefreshThreshold={100}
        next={() => setSkip((prevSkip) => prevSkip + SKIP_VALUE)}
        hasMore={products?.length < total!}
        loader={renderLoadingIdicator()}
        endMessage={renderEndMessage()}
      >
        <div className="container-fluid">
          <div className="row">
            {products?.map((item) => (
              <div className="col-3 mt-5">
                <ProductItem product={item} />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
