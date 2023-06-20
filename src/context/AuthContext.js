import React, {useState, createContext} from 'react';
import { userDetails } from '../utils/userDB';

export const AuthContext = createContext({
    auth: undefined,
    login: ()=>{},
    logouth: ()=>{},
});

export function AuthProvider (props) {
    const {children} = props;
    const [auth, setAuth] = useState(undefined);

    const login = (userData)=> {  
        setAuth(userData);  
    }

    const logouth = ()=>{
        setAuth(undefined);
    }

    const valueContext = {
        auth,
        login,
        logouth
    };

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}