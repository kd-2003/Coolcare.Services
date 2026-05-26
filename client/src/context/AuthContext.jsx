import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageUser = localStorage.getItem('coolcare_user');
    const storageToken = localStorage.getItem('coolcare_token');
    if (storageUser && storageToken) {
      setUser(JSON.parse(storageUser));
      setToken(storageToken);
      api.defaults.headers.common.Authorization = `Bearer ${storageToken}`;
    }
    setLoading(false);
  }, []);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem('coolcare_user', JSON.stringify(userData));
    localStorage.setItem('coolcare_token', jwtToken);
    api.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('coolcare_user');
    localStorage.removeItem('coolcare_token');
    delete api.defaults.headers.common.Authorization;
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
