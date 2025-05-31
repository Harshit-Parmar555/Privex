// Importing necessary modules
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages import
import Home from "./pages/Home";
import Success from "./pages/Success";
import ReadSecret from "./pages/ReadSecret";

// Toaster import
import { Toaster } from "react-hot-toast";

// Layout import
import Layout from "./Layout";

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#000",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171",
              secondary: "#000",
            },
          },
        }}
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/secret/:uuid" element={<ReadSecret />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Exporting the App component
export default App;
