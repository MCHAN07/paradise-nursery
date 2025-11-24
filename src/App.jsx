import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    window.scrollTo(0, 0); 
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      {!showProductList && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button
                className="get-started-button"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {showProductList && (
        <div className="product-list-container">
          <button className="back-button" onClick={handleHomeClick}>
            ← Back to Home
          </button>
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
