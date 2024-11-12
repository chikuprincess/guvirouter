import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Search.css";

const Search = ({ value, onChangeData }) => {
  return (
    <div>
      <input
        className="search__input"
        type="text"
        placeholder="Enter product name"
        value={value}
        onChange={onChangeData}
      />
    </div>
  );
};

// Add PropTypes to validate the props
Search.propTypes = {
  value: PropTypes.string.isRequired, // `value` should be a string and is required
  onChangeData: PropTypes.func.isRequired, // `onChangeData` should be a function and is required
};

export default Search;
