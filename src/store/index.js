import { configureStore } from "@reduxjs/toolkit";
import productSlices from "./slices/productSlices";
import signUpSlice from './slices/userSlices'




const store = configureStore ({
    reducer: {
        product: productSlices,
        signUp: signUpSlice,
    },
});

export default store