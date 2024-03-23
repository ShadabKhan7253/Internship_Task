import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import Blog2col from '../pages/Blog/Blog2col';
import Blog3col from '../pages/Blog/Blog3col';
import Portfolio2ColMansonry from '../pages/Portofolio/Portfolio2ColMansonry';
import Portfolio2Col from '../pages/Portofolio/Portfolio2Col';
import BlogPost from '../pages/Blog/BlogPost';
import Contact from '../pages/Contact/Contact';
import History from '../pages/History/History';

const AppRoutes = ({ data }) => {
  const projects = data?.user.projects;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="portfolio/portfolio-2-col" element={<Portfolio2Col projects={projects} />} />
        <Route path="portfolio/portfolio-2-col-masonry" element={<Portfolio2ColMansonry />} />
        {/* <Route path="portfolio/portfolio-2-col" element={<Portfolio3Col />} />
        <Route path="portfolio/portfolio-2-col-mansonry" element={<Portfolio3ColMansonry />} /> */}
        <Route path="blog/blog-2-col" element={<Blog2col />} />
        <Route path="blog/blog-3-col" element={<Blog3col />} />
        <Route path="blog/blog-post" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
