import { createContext, useState } from 'react';
import { signIn, signUp } from '../services/AuthServices';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({ email: null, logado: true });
  const [error, setError] = useState();


  const login =  async (email, senha) => {
    try{
      await signIn(email, senha);
      setUsuario({ email, logado: true });
        setError(null);
    }  catch (error) {  
     }
  };

  const logout = () => {
    setUsuario({ email: null, logado: false });
  };

  const register = async (nome, email, senha) => {
    try {
      await signUp(nome, email, senha);
      setUsuario({email, logado: true});
      setError(null);
    } catch (error) {
    }
  };

  return (
    <AuthContext.Provider value={{ error, usuario, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };