import { useNavigate } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = ({ categories }) => {
  const navigate = useNavigate();

  const handleClick = (categoryName) => {
    navigate(`/${categoryName.toLowerCase()}`); // P.sh. "/electric"
  };

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <button 
            onClick={() => handleClick(category.name)}
            className="shiko-btn"
          >
            Shiko më shumë
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;