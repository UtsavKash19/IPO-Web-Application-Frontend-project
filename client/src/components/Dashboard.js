import React from 'react';
import './Dashboard.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FiBell, FiSearch } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom'; // Added for routing

const sidebarItems = [
  { label: 'Dashboard', icon: '📊', path: '/dashboard' },
  { label: 'Manage IPO', icon: '🗂', path: '/manage-ipo' },
  { label: 'IPO Subscription', icon: '📝' },
  { label: 'IPO Allotment', icon: '✅' },
  { label: 'Settings', icon: '⚙️', others: true },
  { label: 'API Manager', icon: '🔌', others: true },
  { label: 'Accounts', icon: '👤', others: true },
  { label: 'Help', icon: '❓', others: true },
];

const totalData = [
  { name: 'Gain', value: 20, color: '#33D69F' },
  { name: 'Loss', value: 9, color: '#6C5CE7' },
];
const boardData = [
  { name: 'Upcoming', value: 15, color: '#6C5CE7' },
  { name: 'New Listed', value: 25, color: '#2D9CDB' },
  { name: 'Ongoing', value: 2, color: '#BDC3D3' },
];

function Dashboard() {
  const location = useLocation(); // to get current route

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">BF</div>
        <nav>
          {sidebarItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return item.path ? (
              <Link key={i} to={item.path} className={`nav-item ${isActive ? 'active' : ''}`}>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            ) : (
              <div key={i} className="nav-item">
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="search">
            <FiSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="profile">
            <span>Hi, Vishal</span>
            <FiBell className="bell" />
          </div>
        </header>

        {/* Dashboard cards */}
        <section className="cards">
          <div className="card">
            <h3>IPO Dashboard India</h3>
            <div className="gain">↑ 20 IPO in Gain</div>
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={totalData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                >
                  {totalData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="legend">
              <div><span className="dot gain"></span> {totalData[0].value} IPO in Gain</div>
              <div><span className="dot loss"></span> {totalData[1].value} IPO in Loss</div>
              <div><span className="dot total"></span> {totalData[0].value + totalData[1].value} Total IPO</div>
            </div>
          </div>

          <div className="card">
            <h3>Quick Links</h3>
            <p>Adipiscing elit, sed do eiusmod tempor</p>
            <ul className="links">
              {['NSE India', 'BSE India', 'SEBI', 'Money Control'].map((link, i) => (
                <li key={i}>
                  <span className="favicon">🔗</span>
                  {link} <a href="#">Visit Now</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Main Board IPO</h3>
              <button className="btn-report">View Report</button>
            </div>
            <p>From 01 Jan 2024</p>
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={boardData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                >
                  {boardData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="legend small">
              {boardData.map((entry, i) => (
                <div key={i}>
                  <span className="dot" style={{ background: entry.color }}></span>
                  {entry.name} {entry.value}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
