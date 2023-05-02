import React from 'react';

import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function RequireAuth({ children }) {
    const location = useLocation();
    const { route } = useAuthenticator((context) => [context.route]);
    console.log(route);
    if (route !== 'authenticated') {
        console.log('NOT LOGGED IN');
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    return children;
}