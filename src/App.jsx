import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LessonPage from './pages/LessonPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Track page views
    const clickstream = {
      userId: auth.currentUser?.uid || 'anonymous',
      eventType: 'page_view',
      metadata: { path: location.pathname },
      timestamp: new Date().toISOString(),
    };
    fetch('https://your-backend-url/api/clickstream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clickstream),
    });
  }, [location]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate('/login');
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lesson/:id" element={<LessonPage />} />
    </Routes>
  );
}

export default App;