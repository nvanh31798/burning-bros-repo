import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import {
  getAllProducts,
  searchProducts,
} from "../../thunks/product/productAsynThunk";
import { ActionStatusEnum } from "../../models/ActionStatusEnum";

export interface ProductState {
  products: Product[];
  isSearching: boolean;
  fetchStatus: ActionStatusEnum;
  total?: number;
}

const initialState: ProductState = {
  products: [],
  isSearching: false,
  fetchStatus: ActionStatusEnum.Idle,
  total: 100,
};

export const productSlice = createSlice({
  name: "action/product",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = state.products.concat(action.payload);
    },
    setIsSearchingProduct: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.fetchStatus = ActionStatusEnum.Success;
      if (!state.products || state.products?.length === 0) {
        state.products = action.payload.products;
      }
      state.products = state.products?.concat(action.payload?.products);
    });

    builder.addCase(getAllProducts.pending, (state) => {
      state.fetchStatus = ActionStatusEnum.Pending;
    });

    builder.addCase(getAllProducts.rejected, (state) => {
      state.fetchStatus = ActionStatusEnum.Failed;
    });

    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.fetchStatus = ActionStatusEnum.Success;
      state.products = action.payload.products;
      state.total = action.payload.total;
    });

    builder.addCase(searchProducts.pending, (state) => {
      state.fetchStatus = ActionStatusEnum.Pending;
    });

    builder.addCase(searchProducts.rejected, (state) => {
      state.fetchStatus = ActionStatusEnum.Failed;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addProducts, setIsSearchingProduct } = productSlice.actions;

export default productSlice.reducer;
