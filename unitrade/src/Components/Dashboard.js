// src/components/Dashboard.js
import React, { useState } from 'react';
import ItemCard from './ItemCard';
import ItemModal from './ItemModal';
import AddItemModal from './AddItemModal';
import './dashboard.css';
import logo from '../Images/mytroy.png';
import { useNavigate } from 'react-router-dom';
import laptop from '../Images/Laptop.png'
import phone from '../Images/smartphone.png'
import headphone from '../Images/headphones.png'
import smartwwatch from '../Images/smartwatch.png'
import console from '../Images/gamingconsole.png'
import speaker from '../Images/Bluetoothspeaker.png'
import tablet from '../Images/tablet.png'
import camera from '../Images/camera.png'
const staticProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "A high-end laptop with 16GB RAM and 512GB SSD.",
    sellerName: "John Doe",
    image: laptop
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    description: "A smartphone with excellent camera and battery life.",
    sellerName: "Jane Smith",
    image: phone
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
    description: "Noise-cancelling wireless headphones.",
    sellerName: "Alice Johnson",
    image: headphone
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 250,
    description: "A smartwatch with health tracking features.",
    sellerName: "Bob Williams",
    image: smartwwatch
  },
  {
    id: 5,
    name: "Gaming Console",
    price: 500,
    description: "A popular gaming console with 1TB storage.",
    sellerName: "Charlie Davis",
    image: console
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 150,
    description: "Portable Bluetooth speaker with rich bass sound.",
    sellerName: "Daniel Miller",
    image: speaker
  },
  {
    id: 7,
    name: "Tablet",
    price: 600,
    description: "A lightweight tablet perfect for entertainment and work.",
    sellerName: "Eva White",
    image: tablet
  },
  {
    id: 8,
    name: "Camera",
    price: 1100,
    description: "A professional camera with 24MP resolution and 4K video support.",
    sellerName: "Frank Black",
    image: camera
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddItem, setShowAddItem] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState('Location');

  const handleDropdownSelect = (option) => {
    setDropdownLabel(option);
  };
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
        <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: "white" }}>
          <h5 style={{ color: '#840132', fontWeight: "700" }}>Sponsored</h5>
          <p style={{ color: 'black' }}>Check out the latest tech gear at unbeatable prices.</p>
        </div>
        <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: "white" }}>
          <h5 style={{ color: '#840132', fontWeight: "700" }}>Library Announcement</h5>
          <p style={{ color: 'black' }}>New research journals and e-books available for all students.</p>
        </div>
        <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: "white" }}>
          <h5 style={{ color: '#840132', fontWeight: "700" }}>Student Workshop</h5>
          <p style={{ color: 'black' }}>Attend the Coding Bootcamp for Beginners - Register now!</p>
        </div>
      </div>

      <div className="col-md-8 position-relative bg-white border shadow-sm rounded p-4 hide-scrollbar" >
        <div className="dropdown position-absolute top-0 start-0 m-3">
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={() => handleDropdownSelect('Troy')}>Troy </button></li>
            <li><button className="dropdown-item" onClick={() => handleDropdownSelect('Troy - Dothan')}>Troy - Dothan</button></li>
            <li><button className="dropdown-item" onClick={() => handleDropdownSelect('Troy - Montgomery')}>Troy - Montgomery</button></li>
          </ul>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img style={{ width: "70px", height: "70px" }} src={logo}></img>
        </div>
        <div>
          <h1 className="text-center mb-4" style={{ color: '#840132', fontWeight: "700" }}>MarketPlace</h1>
        </div>
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

      <div className="col-sm-2 p-4" style={{ backgroundColor: "#500221" }}>
        {/* Display more ads or content */}
        <p style={{ color: "white", cursor: "pointer", fontWeight: "700" }} onClick={() => setShowAddItem(true)}>Add Item</p>
        <select onChange={(e) => handleDropdownSelect(e.target.value)} style={{ backgroundColor: "#500221", color: "white", fontWeight: "700", width: "45%", height: "3%" }}>
          <option value={""}>Location</option>
          <option value={"Troy"}>Troy</option>
          <option value={"Troy - Dothan"}>Troy - Dothan</option>
          <option value={"Troy - Montgomery"}>Troy - Montgomery</option>
        </select>
        <p style={{ color: "white", position: "absolute", bottom: "0", marginBottom: "10px", cursor: "pointer", fontWeight: "700" }} onClick={() => { navigate('/login'); }}>Log Out</p>
      </div>
    </div>
  );
};

export default Dashboard;