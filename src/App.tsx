import React, { useState, useEffect } from 'react';
import './index.css';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
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
          
          <div className="templates-layout">
            {/* Left Column */}
            <div className="templates-left">
              <div className="template-item">
                <img src="/template1.jpg" alt="Template 1" className="template-img" />
                <div className="template-info">
                  <h3>Website Templates</h3>
                  <p>Professional templates for modern businesses</p>
                  <button className="template-btn">VIEW MORE</button>
                </div>
              </div>
              <div className="template-item">
                <img src="/template2.jpg" alt="Template 2" className="template-img" />
                <div className="template-info">
                  <h3>Investment Returns</h3>
                  <p>Financial analysis and reporting templates</p>
                  <button className="template-btn">VIEW MORE</button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="templates-right">
              <div className="template-item">
                <img src="/template3.jpg" alt="Template 3" className="template-img" />
                <div className="template-info">
                  <h3>Urban Streetwear Hub</h3>
                  <p>Fashion and lifestyle e-commerce templates</p>
                  <button className="template-btn">VIEW MORE</button>
                </div>
              </div>
              <div className="template-item">
                <img src="/template4.jpg" alt="Template 4" className="template-img" />
                <div className="template-info">
                  <h3>Creative Portfolio</h3>
                  <p>Showcase your work with style</p>
                  <button className="template-btn">VIEW MORE</button>
                </div>
              </div>
              <div className="template-item">
                <img src="/template5.jpg" alt="Template 5" className="template-img" />
                <div className="template-info">
                  <h3>Business Landing</h3>
                  <p>Convert visitors into customers</p>
                  <button className="template-btn">VIEW MORE</button>
                </div>
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
