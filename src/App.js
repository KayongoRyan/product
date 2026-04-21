import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <button className="nav-btn menu-btn">
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
            MENU
          </button>
          <button className="nav-btn connect-btn">CONNECT</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80" 
          alt="Hero background" 
          className="hero-image"
        />
        <h1 className="hero-text">NO</h1>
      </section>

      {/* Products Separator */}
      <section className="products-separator">
        <div className="products-text">
          <span>PRODUCTS</span>
          <span>PRODUCTS</span>
          <span>PRODUCTS</span>
          <span>PRODUCTS</span>
          <span>PRODUCTS</span>
          <span>PRODUCTS</span>
          <span>PRODUCTS</span>
          <span>PRODUCTS</span>
        </div>
      </section>

      {/* Templates Section */}
      <section className="templates-section">
        <div className="container">
          <h2 className="section-title">SHOP SQUARESPACE TEMPLATES</h2>
          
          <div className="templates-grid">
            {/* Template 1: Website Templates */}
            <div className="template-card">
              <div className="template-image">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>
                    WHY THE FUTURE OF PRIVATE EQUITY MATTERS!
                  </h3>
                  <p style={{ fontSize: '16px', color: '#fff', opacity: 0.9 }}>
                    FUTURE OF PRIVATE EQUITY BY THE NUMBERS
                  </p>
                </div>
              </div>
              <div className="template-content">
                <h3 className="template-title">Website Templates</h3>
                <p className="template-subtitle">Professional templates for modern businesses</p>
                <button className="template-btn">VIEW MORE</button>
              </div>
            </div>

            {/* Template 2: Investment Returns */}
            <div className="template-card">
              <div className="template-image dark">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>
                    INVESTMENT RETURNS
                  </h3>
                  <p style={{ fontSize: '20px', color: '#fff', opacity: 0.9 }}>
                    FUTURE OF PRIVATE
                  </p>
                </div>
              </div>
              <div className="template-content">
                <h3 className="template-title">Investment Returns</h3>
                <p className="template-subtitle">Financial analysis and reporting templates</p>
                <button className="template-btn">VIEW MORE</button>
              </div>
            </div>

            {/* Template 3: Urban Streetwear Hub */}
            <div className="template-card">
              <div className="template-image streetwear">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '60px', marginBottom: '10px' }}>😎</div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>
                    FROM DUSK TILL DAWN
                  </h3>
                  <p style={{ fontSize: '18px', color: '#fff', opacity: 0.9 }}>
                    URBAN STREETWEAR HUB
                  </p>
                </div>
              </div>
              <div className="template-content">
                <h3 className="template-title">Urban Streetwear Hub</h3>
                <p className="template-subtitle">Fashion and lifestyle e-commerce templates</p>
                <button className="template-btn">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
