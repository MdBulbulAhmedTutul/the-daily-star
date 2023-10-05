import { createContext } from "react";

const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const authInfo = {};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;