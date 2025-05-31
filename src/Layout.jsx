// Importing necessary modules
import React from "react";
import { Outlet } from "react-router-dom";

// Importing custom components
import Navbar from "./custom/Navbar";

// Main Layout component
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// Exporting the Layout component
export default Layout;
