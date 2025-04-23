import React from 'react';
import './IPOForm.css';

const IPOForm = () => {
  return (
    <div className="ipo-form-wrapper">
      <div className="ipo-form-card">
        <div className="ipo-form-container">
          <div className="form-header">
            <h2>Upcomming IPO Information</h2>
            <div className="form-actions">
              <button className="register-btn">Register</button>
              <button className="register-btn">Cancel</button>
            </div>
          </div>

          <p className="form-subtitle">Manage your IPO Details</p>

          <div className="ipo-info-section">
            <h3>IPO Information</h3>
            <p className="section-desc">Enter IPO Details</p>

            <div className="company-info">
              <div className="logo-box">
                <img src="/images/com logo.png" alt="Company Logo" className="company-logo" />
                <div>
                  <h4>NSE India</h4>
                  <p>Tech Lead<br />Pune</p>
                </div>
              </div>
              <div className="button-group">
  <button className="register-btn">Upload Logo</button>
  <button className="register-btn">Delete</button>
</div>

            </div>

            <div className="form-grid">
              <input type="text" placeholder="Company Name" defaultValue="Vodafone Idea" />
              <input type="text" placeholder="Price Band" defaultValue="Not Issued" />
              <input type="text" placeholder="Open" defaultValue="Not Issued" />
              <input type="text" placeholder="Close" defaultValue="Not Issued" />
              <input type="text" placeholder="Issue Size" defaultValue="2300 Cr." />
              <select>
                <option>Issue Type</option>
                <option>Book Built</option>
                <option>Fixed Price</option>
              </select>
              <input type="text" placeholder="Listing Date" defaultValue="Not Issued" />
              <select>
                <option>Status</option>
                <option>Ongoing</option>
                <option>Comming</option>
                <option>New Listed</option>
              </select>
            </div>

            <h4 className="section-label">New Listed IPO Details (When IPO Gets Listed)</h4>

            <div className="form-grid">
              <input type="text" placeholder="IPO Price" defaultValue="₹ 383" />
              <input type="text" placeholder="Listing Price" defaultValue="₹ 435" />
              <input type="text" placeholder="Listing Gain" defaultValue="13.58 %" />
              <input type="text" placeholder="Listing Date" defaultValue="2024-05-30" />
              <input type="text" placeholder="CMP" defaultValue="₹410" />
              <input type="text" placeholder="Current Return" defaultValue="7.05 %" />
              <input type="text" placeholder="Enter RHP PDF Link" />
              <input type="text" placeholder="Enter DRHP PDF Link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOForm;
