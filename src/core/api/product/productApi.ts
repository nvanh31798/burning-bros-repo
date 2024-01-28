import { BASE_URL } from "../../constant/constant";
import { QueryProductRequest, SearchProductsRequest } from "../models/Product";

export const ProductApi = () => {
  const getAllProducts = async (requestParams: QueryProductRequest) => {
    const defaultLimitValue = 20;
    const defaultSkipValue = 0;

    const limitURI = `limit=${requestParams.limit ?? defaultLimitValue}`;
    const skipURI = `skip=${requestParams.skip ?? defaultSkipValue}`;

    const requestParamURI = `${limitURI}&${skipURI}`;

    return await fetch(`${BASE_URL}/products?${requestParamURI}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const searchProducts = async (requestParams: SearchProductsRequest) => {

    const searchURI = `search?q=${requestParams.value}`;

    return await fetch(`${BASE_URL}/products/${searchURI}`, {
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
