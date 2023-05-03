import React, { useEffect } from 'react';

import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

export default function RequireAuth({ children }) {
    const location = useLocation();
    const { route } = useAuthenticator((context) => [context.route]);
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);
    //console.log(route);
    //console.log(authStatus);

    /* const checkUser = async () => {
        const user = Auth.currentAuthenticatedUser({
            bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        });
        console.log(user);
    }; */
    //.then((user) => console.log(user))
    //.catch((err) => console.log(err));

    //checkUser();

    //configuring
    //authenticated
    //unauthenticated

    useEffect(() => {
        if (authStatus === 'configuring') {

        }
     }, [authStatus]);


    /* if (route !== 'authenticated') {
        console.log('NOT LOGGED IN');
        return <Navigate to='/login' state={{ from: location }} replace />;
    } */
    return children;
}