// src/components/Dashboard.js
import React, { useState } from 'react';
import ItemCard from './ItemCard';
import ItemModal from './ItemModal';
import AddItemModal from './AddItemModal';

const staticProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "A high-end laptop with 16GB RAM and 512GB SSD.",
    sellerName: "John Doe",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    description: "A smartphone with excellent camera and battery life.",
    sellerName: "Jane Smith",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
    description: "Noise-cancelling wireless headphones.",
    sellerName: "Alice Johnson",
    image: "https://via.placeholder.com/150"
  }
];

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddItem, setShowAddItem] = useState(false);

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex">
      <div className="col-md-3 p-4">
        {/* Display events or ads */}
        <div className="bg-white p-3 rounded shadow-sm mb-4">
          <h5>Upcoming Event</h5>
          <p>Summer Sale - Up to 50% Off</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm mb-4">
          <h5>Advertisement</h5>
          <p>New Gadgets Collection Available Now!</p>
        </div>
      </div>

      <div className="col-md-6 position-relative bg-white border shadow-sm rounded p-4">
        <button
          className="btn btn-primary position-absolute top-0 end-0 m-3"
          onClick={() => setShowAddItem(true)}
        >
          Add Item
        </button>
        <h1 className="text-center mb-4">Product Listings</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {staticProducts.map((product) => (
            <ItemCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
          ))}
        </div>

        {/* Modal for showing product details */}
        {selectedProduct && <ItemModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}

        {/* Modal for adding new item */}
        {showAddItem && <AddItemModal onClose={() => setShowAddItem(false)} />}
      </div>

      <div className="col-md-3 p-4">
        {/* Display more ads or content */}
        <div className="bg-white p-3 rounded shadow-sm mb-4">
          <h5>Sponsored</h5>
          <p>Check out the latest tech gear at unbeatable prices.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;