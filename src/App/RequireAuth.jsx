import React from 'react';

import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Loader from 'layouts/components/Loader';

export default function RequireAuth({ children }) {

    const location = useLocation();
    //const { route } = useAuthenticator((context) => [context.route]);
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    //console.log(route);
    //console.log(authStatus);

    if (authStatus === 'configuring') return <Loader />;
    if (authStatus === 'unauthenticated') return <Navigate to='/authentication/sign-in' state={{ from: location }} replace />;

    if (authStatus === 'authenticated') return children;

}