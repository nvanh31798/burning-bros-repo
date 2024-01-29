import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import {
  getAllProducts,
  searchProducts,
} from "../../thunks/product/productAsynThunk";
import { ActionStatusEnum } from "../../models/ActionStatusEnum";
import mockProducsResponse from "../../../../test/mock/mockProduct/get.json";

export interface ProductState {
  products: Product[];
  searchValue?: string;
  fetchStatus: ActionStatusEnum;
  isSearching?: boolean;
  total?: number;
}

const isUsingMock = process.env.REACT_APP_USING_MOCK;

const mockInitialProductState = {
  products: mockProducsResponse.products as Product[],
  isSearching: false,
  fetchStatus: ActionStatusEnum.Idle,
  total: mockProducsResponse.total,
} as ProductState;

const initialState: ProductState = isUsingMock
  ? mockInitialProductState
  : {
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
    setSearchValue: (state, action: PayloadAction<string | undefined>) => {
      state.searchValue = action.payload;
      if (!action.payload) {
        state.isSearching = false;
        return;
      }
      state.isSearching = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.fetchStatus = ActionStatusEnum.Success;
      if (!action.payload.skip) {
        state.products = action.payload.products;
        return;
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
      state.total = action.payload.total;
      if (action.payload.skip && action.payload.skip > 0) {
        state.products = state.products.concat(action.payload.products);
        return;
      }
      state.products = action.payload.products;
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
export const { addProducts, setSearchValue } = productSlice.actions;

export default productSlice.reducer;
