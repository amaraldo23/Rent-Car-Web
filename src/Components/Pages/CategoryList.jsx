import React from 'react';
import './CategoryList.css'; // mund të përdorësh klasat tailwind ose një css të thjeshtë

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <img src={category.image} alt={category.name} className="category-image" />
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <button className="shiko-btn">Shiko më shumë</button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
