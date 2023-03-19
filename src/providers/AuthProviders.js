import { createContext } from 'react';
import { useProvideAuth } from '../hookes';
const initialstate = {
  user: null,
  login: () => {},
  logout: () => {},
  updateUser: () => {},
  loading: true,
};

export const AuthContext = createContext(initialstate);

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}> {children}</AuthContext.Provider>;
};
