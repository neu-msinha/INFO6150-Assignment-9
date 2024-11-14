import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
import Companies from './components/Companies';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }, []);

  const activeStyle = { backgroundColor: 'white', color: "#333", fontWeight: 'bold' };
  const defaultStyle = { color: '#fff', fontWeight: 'bold' };

  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: 'maroon' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Portal
          </Typography>

          {isAuthenticated ? (
            <>
              <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                <Button color="inherit">Home</Button>
              </NavLink>
              <NavLink to="/jobs" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                <Button color="inherit">Jobs</Button>
              </NavLink>
              <NavLink to="/companies" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                <Button color="inherit">Companies</Button>
              </NavLink>
              <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                <Button color="inherit">About</Button>
              </NavLink>
              <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                <Button color="inherit">Contact</Button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                <Button color="inherit">Home</Button>
              </NavLink>
            </>
          )}

          {isAuthenticated ? (
            <Button color="inherit" onClick={() => { Logout(); setIsAuthenticated(false); }}>
              Logout
            </Button>
          ) : (
            <>
              <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                <Button color="inherit">Login</Button>
              </NavLink>
              <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                <Button color="inherit">Register</Button>
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        {/* Protected Routes */}
        <Route
          path="/about"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Jobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Companies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Contact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
