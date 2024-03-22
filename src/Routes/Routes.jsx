import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/routes";
import SingleProduct from "../pages/products/SingleProduct";
import Profile from "../pages/profile/Profile";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import SingleCategory from "../pages/categories/SingleCategory";



const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
);

export default AppRoutes;