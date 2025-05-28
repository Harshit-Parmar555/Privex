import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import Success from "./pages/Success";

// toaster import
import { Toaster } from "react-hot-toast";

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
        <Route path="/" element={<Home />} />
        <Route path="/success/:id" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
