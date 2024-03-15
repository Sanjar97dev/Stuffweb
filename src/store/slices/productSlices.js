import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getProduct = createAsyncThunk('products/getProducts', async () => {
    const response = await axios.get("/products");
    return response.data;
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        productData: null,
        filtered: [],
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productData = action.payload;
        });
        builder.addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default productSlice.reducer;
