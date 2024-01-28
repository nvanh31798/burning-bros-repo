import { Product } from "../../redux/models/Product";

export interface QueryProductRequest {
  skip?: number;
  limit?: number;
}

export interface QueryProductResponse {
  total: number;
  products: Product[];
}

export interface SearchProductsRequest {
  value: string;
  skip?: number;
  limit?: number;
}
