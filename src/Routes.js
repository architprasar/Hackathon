import React from "react";
import DetailPage from "../src/pages/DetailPage";
import ListPage from "../src/pages/ListPage";
import Page from "../src/pages/Page";
import Admin from "../src/pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../src/pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/page" element={<Page />} />
        
        <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
