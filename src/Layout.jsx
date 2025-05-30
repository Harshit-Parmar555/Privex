import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./custom/Navbar";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
