import React, { createContext, useContext, useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';

const AdminAuthContext = createContext(null);

// Hardcoded hash for "admin123"
const ADMIN_PASSWORD_HASH = '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa'; // "password"

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = () => {
      const session = localStorage.getItem('adminSession');
      if (session) {
        try {
          const { expiresAt } = JSON.parse(session);
          if (new Date().getTime() < expiresAt) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('adminSession');
          }
        } catch (e) {
          localStorage.removeItem('adminSession');
        }
      }
      setIsLoading(false);
    };
    checkSession();
  }, []);

  const login = async (password) => {
    try {
      const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
      if (isValid) {
        const expiresAt = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 7 days
        localStorage.setItem('adminSession', JSON.stringify({ expiresAt }));
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('adminSession');
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};