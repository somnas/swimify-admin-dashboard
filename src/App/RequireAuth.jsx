import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import Loader from 'layouts/components/Loader';

export default function RequireAuth({ children }) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const location = useLocation();

    const checkUser = async () => {
        try {
            await Auth.currentSession();
            setLoading(false);
        } catch {
            setLoading(false);
            setError(true);
        }
    };
    checkUser();

    if (loading) return <Loader />;
    if (error) return <Navigate to='/authentication/sign-in' state={{ from: location }} replace />;

    return children;

}