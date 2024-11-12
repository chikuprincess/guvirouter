import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "./Card.css";

const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);

  useEffect(() => {
    const item = addedItems.find((addedItem) => addedItem.id === product.id);
    setIsAdded(!item);
  }, [addedItems, product.id]);

  return (
    <div className="card">
      <img className="card__img" src={product.image} alt={product.title} />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <div className="card-price-add">
        <span>Price : ${product.price}</span>
        <button
          className={isAdded ? "add-item-btn" : "remove-item-btn"}
          onClick={() => {
            if (isAdded) {
              addItem(product);
            } else {
              removeItem(product);
            }
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD" : "CANCEL"}
        </button>
      </div>
    </div>
  );
};

// Add PropTypes to validate the props
Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  addedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export default Card;
