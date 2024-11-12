import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./List.css";

function List({ products }) {
  return (
    <ol>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ol>
  );
}

// Add PropTypes to validate the props
List.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // `id` should be either string or number and is required
      title: PropTypes.string.isRequired, // `title` should be a string and is required
    })
  ).isRequired, // `products` should be an array of product objects and is required
};

export default List;
