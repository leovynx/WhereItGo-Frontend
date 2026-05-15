import React from 'react';
import './Settings.module.css';

interface SettingsProps {
  openProfile: () => void;
}

const Settings: React.FC<SettingsProps> = ({ openProfile }) => {
  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>

      <div className="settings-card">
        <div className="setting-item" onClick={openProfile}>
          <div>
            <h4>User Profile</h4>
            <p>Manage your account information</p>
          </div>

          <span>›</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;