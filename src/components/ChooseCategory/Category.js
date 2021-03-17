import React from "react";
import "./Category.css";
import CategoryCard from "./CaregoryCard.js";
import Footer from "../Footer/Footer";

function Category() {
  return (
    <>
      <div className="category-background">
        <div className="category-title">
          <h1>Choose your category</h1>
        </div>
        <div className="grid-container">
          <CategoryCard link="web-development" title="Web Development" />
          <CategoryCard link="data-science" title="Data Science" />
          <CategoryCard link="digital-marketing" title="Digital Marketing" />
          <CategoryCard link="design" title="Design" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Category;
