import { PRODUCT_SERVICE_URL } from "../../constant/constant";
import { QueryProductRequest, SearchProductsRequest } from "../models/Product";

export const ProductApi = () => {
  const getAllProducts = async (requestParams: QueryProductRequest) => {
    const defaultLimitValue = 20;
    const defaultSkipValue = 0;

    console.log(PRODUCT_SERVICE_URL);
    const limitURI = `limit=${requestParams.limit ?? defaultLimitValue}`;
    const skipURI = `skip=${requestParams.skip ?? defaultSkipValue}`;

    const requestParamURI = `${limitURI}&${skipURI}`;

    return await fetch(`${PRODUCT_SERVICE_URL}?${requestParamURI}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const searchProducts = async (requestParams: SearchProductsRequest) => {
    const searchURI = `search?q=${requestParams.value}`;

    return await fetch(`${PRODUCT_SERVICE_URL}/${searchURI}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return {
    getAllProducts: getAllProducts,
    searchProducts: searchProducts,
  };
};
