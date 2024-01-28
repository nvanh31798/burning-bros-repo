import Rating from "@mui/material/Rating";
import { Product } from "../../../../core/redux/models/Product";
import ImageGallery from "react-image-gallery";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {

  const renderImages = () => {
    return product.images?.map((image) => {
      return {
        original: image,
        thumbnail: image,
        originalHeight: 250,
        ororiginalWidth: 250,
        thumbnailHeight: 50,
        thumbnailWidth: 50,
      };
    });
  };

  return (
    <div className="card overflow-x-hidden overflow-y-scroll card-sizing py-2 hide-scrollbar m-auto">
      <div className="card-img-top">
        <ImageGallery
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
          showBullets
          autoPlay={false}
          lazyLoad={true}
          items={renderImages()}
        />
      </div>
      <div className="card-body">
        <p className="card-title fs-4 fw-bolder">{product?.title}</p>
        <p className="card-text fs-6 fw-light">{product?.description}</p>
        <div className="d-flex justify-content-between py-3">
          <div>
            <Rating
              precision={0.5}
              name="read-only"
              value={product?.rating}
              readOnly
            />

            <div className="fw-bold"></div>
            <p className="fw-bolder success text-success">$ {product?.price}</p>
            <p className="fs-6 fw-lighter fst-italic">{product?.stock} items left</p>
          </div>
          <div>
            <button
              disabled={product?.stock <= 0}
              className="btn btn-primary btn-sm px-5"
              onClick={() => {}}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
