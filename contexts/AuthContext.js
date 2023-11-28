import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [error, setError] = useState();

    const [user, setUser] = useState({ email: "", logado: false, senha: "", nome: "" });

    const login = (email, senha) => {
        const errorMessage = "E-mail ou senha inválidos.";
        const emailMessage = "Insira um e-mail de formato válido.";

        if (!email || !senha) {
            setError(errorMessage);
            return;
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(emailMessage);
            return;
        }

       
       

        setUser(prevUser => ({
            ...prevUser,
            email: email,
            logado: true,
        }));
        setError(null);
    };

    const logout = () => {
        setUser(prevUser => ({
            ...prevUser,
            logado: false
        }));
    };

    const contexto = {
        user,
        login,
        logout,
        error,
    };

    return (
        <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
export { AuthContext };
