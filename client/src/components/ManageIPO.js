// ManageIPO.js
import React from 'react';
import './ManageIPO.css';
import { Link } from 'react-router-dom';

const ipoData = [
  {
    company: "Adani Power",
    priceBand: "₹ 329 - 136",
    open: "2023-06-03",
    close: "2024-06-05",
    issueSize: "45530.15 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "Ongoing",
  },
  {
    company: "VBL LTD",
    priceBand: "₹ 229 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "1330.15 Cr.",
    issueType: "Book Built",
    listingDate: "2018-06-10",
    status: "Comming",
  },
  {
    company: "Tata Motor",
    priceBand: "₹ 12549 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "1340.15 Cr.",
    issueType: "Book Built",
    listingDate: "2016-06-10",
    status: "New Listed",
  },
  {
    company: "HDFC LTD",
    priceBand: "₹ 1244 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "830.15 Cr.",
    issueType: "Book Built",
    listingDate: "2029-06-11",
    status: "Comming",
  },
  {
    company: "Infosys",
    priceBand: "₹ 629 - 136",
    open: "2024-06-01",
    close: "2024-06-04",
    issueSize: "3200.00 Cr.",
    issueType: "Book Built",
    listingDate: "2025-06-15",
    status: "Ongoing",
  },
  {
    company: "Reliance Retail",
    priceBand: "₹ 1500 - 2000",
    open: "2024-05-28",
    close: "2024-06-03",
    issueSize: "56000.00 Cr.",
    issueType: "Book Built",
    listingDate: "2024-06-20",
    status: "Comming",
  },
  {
    company: "Zomato",
    priceBand: "₹ 76 - 100",
    open: "2024-06-02",
    close: "2024-06-06",
    issueSize: "9375.00 Cr.",
    issueType: "Book Built",
    listingDate: "2024-06-18",
    status: "New Listed",
  },
  {
    company: "TCS",
    priceBand: "₹ 2100 - 2200",
    open: "2024-06-05",
    close: "2024-06-07",
    issueSize: "18000.00 Cr.",
    issueType: "Book Built",
    listingDate: "2024-06-30",
    status: "Comming",
  },
  {
    company: "Paytm",
    priceBand: "₹ 2080 - 2150",
    open: "2024-06-08",
    close: "2024-06-10",
    issueSize: "18300.00 Cr.",
    issueType: "Book Built",
    listingDate: "2024-07-01",
    status: "New Listed",
  },
  {
    company: "LIC",
    priceBand: "₹ 902 - 949",
    open: "2024-06-09",
    close: "2024-06-11",
    issueSize: "21000.00 Cr.",
    issueType: "Book Built",
    listingDate: "2024-07-05",
    status: "Ongoing",
  },
];

const ManageIPO = () => {
  return (
    <div className="manage-ipo-container">
      <div className="header">
        <h2>Upcomming IPO | Dashboard</h2>
        <button className="register-btn">Register IPO</button>
      </div>
      <table className="ipo-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Price Band</th>
            <th>Open</th>
            <th>Close</th>
            <th>ISSUE SIZE</th>
            <th>ISSUE Type</th>
            <th>Listing Date</th>
            <th>Status</th>
            <th>Action</th>
            <th>Delete/View</th>
          </tr>
        </thead>
        <tbody>
          {ipoData.map((ipo, index) => (
            <tr key={index}>
              <td>{ipo.company}</td>
              <td>{ipo.priceBand}</td>
              <td>{ipo.open}</td>
              <td>{ipo.close}</td>
              <td>{ipo.issueSize}</td>
              <td>{ipo.issueType}</td>
              <td>{ipo.listingDate}</td>
              <td>
                <span className={`status ${ipo.status.toLowerCase().replace(' ', '-')}`}>
                  {ipo.status}
                </span>
              </td>
              <td>
  <Link to="/ipo-form">
    <button className="update-btn">Update</button>
  </Link>
</td>
              <td className="actions">
                <button className="delete-icon">🗑️</button>
                <button className="view-icon">👁️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>&lt;</button>
        <button className="active">1</button>
        <button>2</button>
        <span>...</span>
        <button>10</button>
        <button>&gt;</button>
      </div>
    </div>
  );
};

export default ManageIPO;
