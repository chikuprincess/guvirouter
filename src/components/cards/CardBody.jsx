import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Card from "./Card";
import "./CardBody.css";

const CardBody = ({ products, addItem, removeItem, addedItems }) => {
  // Ensure all products are marked as added
  products.map((product) => (product.isAdded = true));

  return (
    <div className="card__body">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

// Add PropTypes to validate the props
CardBody.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // `id` should be either string or number and is required
      title: PropTypes.string.isRequired, // Assuming `title` is required for each product
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Price should be string or number and is required
      isAdded: PropTypes.bool, // Optional `isAdded` property for each product
    })
  ).isRequired, // `products` is an array of product objects and is required
  addItem: PropTypes.func.isRequired, // `addItem` should be a function and required
  removeItem: PropTypes.func.isRequired, // `removeItem` should be a function and required
  addedItems: PropTypes.array.isRequired, // `addedItems` should be an array and required
};

export default CardBody;
