import React, { createContext, useContext, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
          const response = await Auth.currentAuthenticatedUser();
          setUser(response);
        }
        fetchUser();
      }, []);

    console.log(user);

    // call this function when you want to authenticate the user
    const login = async (data) => {
        Auth.currentAuthenticatedUser()
            .then(currentUser => setUser(currentUser), navigate('/dashboard'))
            .catch(() => console.log("Not signed in"));
    };

    // call this function to sign out logged in user
    const logout = () => {
        setUser(null);
        navigate('/authentication/sign-in', { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};