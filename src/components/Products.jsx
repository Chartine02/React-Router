import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" name="" id="" placeholder="Search products" />
      </div>
      <Link to="featured">Featured </Link>
      <Link to="new">New </Link>
      <Outlet />
    </>
  );
};

export default Products;
