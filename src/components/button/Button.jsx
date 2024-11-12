import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Button.css";

const Button = ({ num = 0, click }) => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      You Added <span>{num}</span> {num === 1 ? "item" : "items"}
    </button>
  );
};

// Add PropTypes to validate the props
Button.propTypes = {
  num: PropTypes.number.isRequired, // `num` should be a number and required
  click: PropTypes.func.isRequired, // `click` should be a function and required
};

export default Button;
