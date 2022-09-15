import { createContext, useState } from "react";

const AuthContext = createContext({username: 'none', role: 'none'});

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        username: 'none',
        role: 'none'
    });

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;