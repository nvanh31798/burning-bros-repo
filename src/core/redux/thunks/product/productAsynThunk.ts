import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductApi } from "../../../api";
import {
  QueryProductRequest,
  QueryProductResponse,
  SearchProductsRequest,
} from "../../../api/models/Product";
import { Product } from "../../models/Product";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

export const getAllProducts = createAsyncThunk<
  QueryProductResponse,
  QueryProductRequest,
  AsyncThunkConfig
>(
  "products/getAllProducts",
  async ({ skip, limit = 20 }: QueryProductRequest, { rejectWithValue }) => {
    const response = await ProductApi().getAllProducts({
      skip: skip,
      limit: limit,
    } as QueryProductRequest);
    if (response.status !== 200) {
      return rejectWithValue("Invalid response status: " + response.status);
    }

    return await response
      .json()
      .then((res) => {
        return {
          products: res.products as Product[],
          total: res.total,
          skip: skip,
        };
      })
      .catch((error) => rejectWithValue("Invalid response" + error));
  }
);

export const searchProducts = createAsyncThunk<
  QueryProductResponse,
  SearchProductsRequest,
  AsyncThunkConfig
>(
  "products/searchProducts",
  async ({ value, skip }: SearchProductsRequest, { rejectWithValue }) => {
    const response = await ProductApi().searchProducts({
      skip: skip,
      value: value,
    } as SearchProductsRequest);

    if (response.status !== 200) {
      return rejectWithValue("Invalid response status: " + response.status);
    }

    return await response
      .json()
      .then((res) => {
        return {
          products: res.products as Product[],
          total: res.total,
          skip: skip,
        };
      })
      .catch((error) => rejectWithValue("Invalid response" + error));
  }
);
