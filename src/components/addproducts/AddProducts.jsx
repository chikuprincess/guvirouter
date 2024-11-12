import React, { useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import CardList from "./CardList"; // Ensure CardList.js is in the same directory
import "./AddProducts.css"; // Ensure AddProducts.css is in the same directory

const AddProducts = ({ items = [], click, removeItem, setAddedItem }) => {
  const total = items
    .reduce((pre, cur) => {
      const quantity = Number(cur.addNumber) || 0;
      const price = Number(cur.price) || 0;
      return pre + quantity * price;
    }, 0)
    .toFixed(2);

  const showDivRef = useRef(null);

  const handleCheckout = () => {
    if (items.length >= 1) {
      window.print();
    }
  };

  const handleRemoveClick = () => {
    if (showDivRef.current) {
      showDivRef.current.classList.add("animate");
      setTimeout(() => click(false), 200);
    }
  };

  return (
    <div ref={showDivRef} className="addproducts__container">
      <div className="left-side">
        <div className="check-out-container">
          <div className="check-out-print">
            <h1 className="check-out-title">Shopping</h1>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th className="table-item-title">Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={item.id || i}>
                    <td>{i + 1}</td>
                    <td>{item.title || "N/A"}</td>
                    <td>${item.price || "0.00"}</td>
                    <td>{item.addNumber || "0"}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="total" colSpan={2}>Total</td>
                  <td className="total" colSpan={2}>${total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <div className="right-side">
        <div className="right-side-header">
          <h1>
            Shopping <span className="total-items">{items.length}</span>
            {items.length <= 1 ? " item" : " items"}
          </h1>
          <button className="remove-item-btn" onClick={handleRemoveClick}>
            ⌫
          </button>
        </div>
        <div className="right-side-body">
          {items.map((item) => (
            <CardList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
            />
          ))}
        </div>
        <div className="right-side-footer">
          <div className="bar"></div>
          <div className="footer-head">
            <h4>Total :</h4>
            <h1>${total}</h1>
          </div>
          <div className="check-out">
            <button className="check-out-btn" onClick={handleCheckout}>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes to validate the props
AddProducts.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      addNumber: PropTypes.number.isRequired,
    })
  ).isRequired,
  click: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  setAddedItem: PropTypes.func.isRequired,
};

export default AddProducts;
