import { PRODUCT_SERVICE_URL } from "../../constant/constant";
import { QueryProductRequest, SearchProductsRequest } from "../models/Product";

export const ProductApi = () => {
  const defaultLimitItems = 20;
  const defaultSkipValue = 0;

  const getAllProducts = async (requestParams: QueryProductRequest) => {
    const limitURI = `limit=${requestParams.limit ?? defaultLimitItems}`;
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

    const limitURI = `limit=${requestParams.limit ?? defaultLimitItems}`;
    const skipURI = `skip=${requestParams.skip ?? defaultSkipValue}`;

    const requestParamURI = `${limitURI}&${skipURI}`;

    return await fetch(
      `${PRODUCT_SERVICE_URL}/${searchURI}&${requestParamURI}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return {
    getAllProducts: getAllProducts,
    searchProducts: searchProducts,
  };
};
