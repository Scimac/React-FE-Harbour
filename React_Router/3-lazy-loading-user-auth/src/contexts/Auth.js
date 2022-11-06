import React, { useState, useContext } from 'react';

// We moved this login in a separate JS file to make sure all the auth related code is at one place

const UserAuthProvider = React.createContext();

// children are the ones that'll be wrapped in this context.
const AuthProvider = ({ children }) => {
    const [userName, setusername] = useState(null);

    const login = (value) => setusername(value);

    const logout = () => setusername(null);

    return (
        <UserAuthProvider.Provider value={{ 'userName': userName, 'login' : login, 'logout' : logout }}>
            {children}
        </UserAuthProvider.Provider>
    )
}

export default AuthProvider;

//custom hook for using Auth obj anywhere in the children of the application code
export const useAuth = () => {     
    return useContext(UserAuthProvider);
}