import Layout from "./layouts/Layout";

import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Save from "./pages/Save";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import Bookcar from "./pages/BookCar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/blog" element={<Layout />}>
          <Route index element={<Blog />} />
        </Route>
        <Route path="/cars" element={<Layout />}>
          <Route index element={<Cars />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/bookcar" element={<Bookcar />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/save/:id" element={<Save />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
