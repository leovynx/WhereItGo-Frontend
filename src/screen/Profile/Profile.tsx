import React from 'react';
import './Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="avatar">G</div>

        <h2>Gowtham</h2>
        <p className="profile-email">gowtham@example.com</p>

        <div className="profile-info">
          <div className="info-row">
            <span>Role</span>
            <span>User</span>
          </div>

          <div className="info-row">
            <span>Status</span>
            <span>Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;