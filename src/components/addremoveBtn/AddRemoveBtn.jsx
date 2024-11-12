import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

export function AddRemoveBtn({
  isAdded,
  addItem,
  product,
  removeItem,
  setIsAdded,
}) {
  return (
    <button
      className={isAdded ? "remove-item-btn" : "add-item-btn"} // Fix the class names for consistency
      onClick={() => {
        if (!isAdded) {
          addItem(product); // Call addItem if not added
        } else {
          removeItem(product); // Call removeItem if already added
        }
        setIsAdded(!isAdded); // Toggle isAdded state
      }}
    >
      {isAdded ? "CANCEL" : "ADD"} {/* Fix spelling to "CANCEL" */}
    </button>
  );
}

// Add PropTypes to validate the props
AddRemoveBtn.propTypes = {
  isAdded: PropTypes.bool.isRequired, // Boolean for whether the item is added
  addItem: PropTypes.func.isRequired, // Function to add an item
  product: PropTypes.object.isRequired, // Object representing the product
  removeItem: PropTypes.func.isRequired, // Function to remove an item
  setIsAdded: PropTypes.func.isRequired, // Function to update the state of `isAdded`
};

export default AddRemoveBtn;
