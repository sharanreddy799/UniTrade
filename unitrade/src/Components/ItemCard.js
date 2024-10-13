// src/components/ItemCard.js
import React from 'react';

const ItemCard = ({ product, onClick }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: 'pointer', borderColor: "#500221", borderRadius: "20px" }}>
        <img src={product.image} className="card-img-top" alt={product.name} style={{ height: "70%", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} />
        <div className="card-body text-center" style={{ position: "absolute", bottom: "0", marginBottom: "10px", cursor: "pointer" }}>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;