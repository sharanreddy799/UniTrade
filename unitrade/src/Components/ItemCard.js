// src/components/ItemCard.js
import React from 'react';

const ItemCard = ({ product, onClick }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;