import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

// JWT token validation and decoding
const isTokenValid = (token) => {
  if (!token) return false;
  
  try {
    // Split the token into header, payload, and signature
    const [headerB64, payloadB64] = token.split('.');
    if (!headerB64 || !payloadB64) return false;

    // Decode the payload
    const payload = JSON.parse(atob(payloadB64));
    
    // Check if token is expired
    if (payload.exp) {
      const expirationTime = payload.exp * 1000; // Convert to milliseconds
      return Date.now() < expirationTime;
    }
    
    return true;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
};

// Decode JWT token
const decodeToken = (token) => {
  try {
    const [, payloadB64] = token.split('.');
    return JSON.parse(atob(payloadB64));
  } catch (error) {
    console.error('Token decoding error:', error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token in localStorage on initial load
    const storedToken = localStorage.getItem('token');
    if (storedToken && isTokenValid(storedToken)) {
      setToken(storedToken);
      setUser(decodeToken(storedToken));
      setIsAuthenticated(true);
    } else {
      // Clear invalid token
      localStorage.removeItem('token');
    }
  }, []);

  const login = (newToken) => {
    if (isTokenValid(newToken)) {
      localStorage.setItem('token', newToken);
      setToken(newToken);
      setUser(decodeToken(newToken));
      setIsAuthenticated(true);
    } else {
      throw new Error('Invalid token received');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      token, 
      user,
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 