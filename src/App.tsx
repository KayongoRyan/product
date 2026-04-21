import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-left">
            <button className="nav-btn menu-btn">
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              MENU
            </button>
          </div>
          <div className="nav-right">
            <button className="nav-btn connect-btn">CONNECT</button>
          </div>
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
                <div className="template-preview">
                  <div className="preview-header">
                    <div className="preview-stats">
                      <span className="stat-number">60%</span>
                      <span className="stat-label">Growth</span>
                    </div>
                    <div className="preview-stats">
                      <span className="stat-number">15</span>
                      <span className="stat-label">Years</span>
                    </div>
                  </div>
                  <h3 className="preview-title">WHY THE FUTURE OF PRIVATE EQUITY MATTERS!</h3>
                  <p className="preview-subtitle">FUTURE OF PRIVATE EQUITY BY THE NUMBERS</p>
                  <div className="preview-chart">
                    <div className="chart-bar" style={{ width: '70%' }}></div>
                    <div className="chart-bar" style={{ width: '50%' }}></div>
                    <div className="chart-bar" style={{ width: '85%' }}></div>
                  </div>
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
                <div className="template-preview">
                  <div className="preview-vertical">
                    <span className="vertical-text">FUTURE OF PRIVATE</span>
                  </div>
                  <div className="preview-metrics">
                    <div className="metric">
                      <span className="metric-value">60%</span>
                      <span className="metric-label">Returns</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">15.8%</span>
                      <span className="metric-label">Growth</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">USD 4b</span>
                      <span className="metric-label">Value</span>
                    </div>
                  </div>
                  <h3 className="preview-title">INVESTMENT RETURNS</h3>
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
                <div className="template-preview">
                  <div className="preview-magazine">
                    <div className="magazine-cover">
                      <span className="magazine-brand">DARI</span>
                      <span className="magazine-title">FROM DUSK TILL DAWN</span>
                    </div>
                  </div>
                  <div className="preview-products">
                    <div className="product-tag">Women Collection</div>
                    <div className="offer-badge">Save 20%</div>
                  </div>
                  <h3 className="preview-title">URBAN STREETWEAR HUB</h3>
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

      {/* Not Your Average Templates Section */}
      <section className="not-average-section">
        <div className="container">
          <p className="not-average-subheading">
            Stop Hiding Behind Boring Designs—
            <br />
            Create a Site That Makes You Stand Out
          </p>
          <h2 className="not-average-heading">
            Not Your Average
            <br />
            templates
          </h2>
          
          <div className="not-average-grid">
            {/* Representation Templates */}
            <div className="not-average-card representation">
              <div className="card-preview">
                <h3>REPRESENTATION TEMPLATES</h3>
                <button className="card-btn">VIEW MORE</button>
              </div>
            </div>

            {/* Creative Visual Designer */}
            <div className="not-average-card creative">
              <div className="card-preview">
                <p className="card-text">Create a Site</p>
                <p className="card-text">That Actually <span className="highlight">Stands Out</span></p>
                <h4 className="card-title">Creative <span className="highlight">Visual</span> Designer</h4>
                <button className="card-btn shop-now">Shop Now</button>
              </div>
            </div>

            {/* Social Media Templates */}
            <div className="not-average-card social">
              <div className="card-preview">
                <h3>Social Media Templates</h3>
                <p className="card-subtitle">That Demand Attention</p>
                <button className="card-btn shop-now">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUTs Section */}
      <section className="luts-section">
        <div className="container">
          <h2 className="luts-heading">LUTs</h2>
          <p className="luts-description">
            Transform your videos with professional color grading. Our LUTs are designed to give your footage that cinematic look.
          </p>
          
          <div className="luts-grid">
            {/* LUT Product 1 */}
            <div className="lut-card">
              <div className="lut-image">
                <div className="lut-preview"></div>
              </div>
              <div className="lut-content">
                <h3 className="lut-title">Cinematic Warm</h3>
                <p className="lut-price">$29</p>
                <button className="lut-btn">VIEW MORE</button>
              </div>
            </div>

            {/* LUT Product 2 */}
            <div className="lut-card">
              <div className="lut-image">
                <div className="lut-preview"></div>
              </div>
              <div className="lut-content">
                <h3 className="lut-title">Moody Blue</h3>
                <p className="lut-price">$29</p>
                <button className="lut-btn">VIEW MORE</button>
              </div>
            </div>

            {/* LUT Product 3 */}
            <div className="lut-card">
              <div className="lut-image">
                <div className="lut-preview"></div>
              </div>
              <div className="lut-content">
                <h3 className="lut-title">Vintage Film</h3>
                <p className="lut-price">$29</p>
                <button className="lut-btn">VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className="luts-cta">
            <p className="luts-cta-text">KEEP CREATING UNTIL YOU FIND YOUR AUDIENCE</p>
            <button className="luts-more-btn">MORE LUTs</button>
          </div>
        </div>
      </section>

      {/* Elevate Your Style Section */}
      <section className="elevate-section">
        <div className="container">
          <h2 className="elevate-heading">Elevate Your Style With Bold Fashion</h2>
          
          <div className="elevate-grid">
            <div className="elevate-item"></div>
            <div className="elevate-item"></div>
            <div className="elevate-item"></div>
            <div className="elevate-item"></div>
          </div>

          <button className="elevate-explore-btn">Explore More</button>

          <div className="elevate-testimonial">
            <p className="testimonial-text">
              "The quality and attention to detail in these templates is unmatched. They've transformed my business."
            </p>
            <p className="testimonial-author">— Sarah Johnson, Fashion Designer</p>
          </div>

          <div className="elevate-step">
            <span className="step-number">01</span>
            <p className="step-text">Setup your fashion with the latest trend</p>
          </div>

          <div className="elevate-buttons">
            <button className="try-now-btn">try now</button>
            <button className="try-now-btn">try now</button>
            <button className="try-now-btn">try now</button>
            <button className="try-now-btn">try now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
