import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function useAuth () {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
   
    const [user, setUser] = useState(() => localStorage.getItem('user')  || null);

    const login = (newUser, callback) => {
        setUser(newUser);
        localStorage.setItem('user', newUser);
        callback();
        
    }

    const logout = (callback) => {
        setUser(null);
        localStorage.removeItem('user');
        callback();
    }

    const value = {
        login,
        logout,
        user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}