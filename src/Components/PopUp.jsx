import React from "react";

const Popup = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="popup">
      <img src={product.url} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
