import React from 'react';
import './Home.module.css';

interface HomeProps {
  openSettings: () => void;
}

const Home: React.FC<HomeProps> = ({ openSettings }) => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h2 className="home-title">Dashboard</h2>

        <button className="settings-button" onClick={openSettings}>
          ⚙
        </button>
      </header>

      <div className="content-card">
        <h3>Welcome Back</h3>
        <p>
          Minimal interface focused on clarity and smooth navigation.
        </p>
      </div>
    </div>
  );
};

export default Home;