// src/components/Dashboard.js
import React, { useState } from 'react';
import ItemCard from './ItemCard';
import ItemModal from './ItemModal';
import AddItemModal from './AddItemModal';
import './dashboard.css';
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
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 250,
    description: "A smartwatch with health tracking features.",
    sellerName: "Bob Williams",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    name: "Gaming Console",
    price: 500,
    description: "A popular gaming console with 1TB storage.",
    sellerName: "Charlie Davis",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 150,
    description: "Portable Bluetooth speaker with rich bass sound.",
    sellerName: "Daniel Miller",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 7,
    name: "Tablet",
    price: 600,
    description: "A lightweight tablet perfect for entertainment and work.",
    sellerName: "Eva White",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 8,
    name: "Camera",
    price: 1100,
    description: "A professional camera with 24MP resolution and 4K video support.",
    sellerName: "Frank Black",
    image: "https://via.placeholder.com/150"
  }
];

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddItem, setShowAddItem] = useState(false);

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex">
      <div className="col-md-3 p-4" style={{ backgroundColor: "#500221" }}>
        {/* Display events or ads */}
        <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: "white" }}>
          <h5 style={{ color: '#840132', fontWeight: "700" }}>Upcoming Event</h5>
          <p style={{ color: 'black' }}>Summer Sale - Up to 50% Off</p>
        </div>
        <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: "white" }}>
          <h5 style={{ color: '#840132', fontWeight: "700" }}>Advertisement</h5>
          <p style={{ color: 'black' }}>New Gadgets Collection Available Now!</p>
        </div>
      </div>

      <div className="col-md-6 position-relative bg-white border shadow-sm rounded p-4" style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <button
          className="btn btn-primary position-absolute top-0 end-0 m-3"
          style={{ width: "20%" }}
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

      <div className="col-md-3 p-4" style={{ backgroundColor: "#500221" }}>
        {/* Display more ads or content */}
        <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: "white" }}>
          <h5 style={{ color: '#840132', fontWeight: "700" }}>Sponsored</h5>
          <p style={{ color: 'black' }}>Check out the latest tech gear at unbeatable prices.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;