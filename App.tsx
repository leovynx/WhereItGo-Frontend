import React, { useState } from 'react';

import Login from './src/screen/Login/LoginScreen';
// import Home from './src/screen/Home/Home';
// import Settings from './src/screen/Settings/Settings';
// import Profile from './src/screen/Profile/Profile';

const App: React.FC = () => {
  const [page, setPage] = useState('login');

  if (page === 'login') {
    return <Login onLogin={() => setPage('home')} />;
  }

  return <Login onLogin={() => setPage('home')} />;
  // if (page === 'home') {
  //   return <Home openSettings={() => setPage('settings')} />;
  // }

  // if (page === 'settings') {
  //   return <Settings openProfile={() => setPage('profile')} />;
  // }

  // return <Profile />;
};

export default App;