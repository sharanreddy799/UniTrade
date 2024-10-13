// src/components/ItemModal.js
import React from 'react';

const ItemModal = ({ product, onClose }) => {
  return (
    <div className="modal d-flex justify-content-center align-items-center" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={product.image} className="img-fluid mb-3" alt={product.name} />
            <h5 className="mb-3">Price: ${product.price}</h5>
            <p>{product.description}</p>

            {/* Seller Details */}
            <div className="mt-4">
              <h6 className="text-muted">Seller Information:</h6>
              <p><strong>Seller Name:</strong> {product.sellerName}</p>
              {/* Add any additional seller details here */}
              {/* Example: Contact Info */}
              {/* <p><strong>Contact:</strong> {product.sellerContact}</p> */}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;