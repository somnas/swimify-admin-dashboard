import React, { useEffect } from 'react';

import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import Loader from 'layouts/components/Loader';

export default function RequireAuth({ children }) {
    const location = useLocation();
    const { route } = useAuthenticator((context) => [context.route]);
    //const { authStatus } = useAuthenticator((context) => [context.authStatus]);
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

    /* useEffect(() => {
        if (authStatus === 'unauthenticated') {
            return <Navigate to='/authentication/sign-in' state={{ from: location }} replace />;
        } else if (authStatus === 'authenticated') {
            return children;
        } else return <Loader />
    }, [authStatus]); */

    /* if (route !== 'authenticated') {
        return <Navigate to='/login' state={{ from: location }} replace />;
    } */

    const authStatus = 'configuring';

    if (authStatus === 'configuring') return <Loader />;
    if (authStatus === 'unauthenticated') return <Navigate to='/authentication/sign-in' state={{ from: location }} replace />;

    if (authStatus === 'authenticated') return children;

    /* return (
        <>
        {
            authStatus === 'configuring' ? <Loading /> :
            authStatus === 'unauthenticated' ? : 
            authStatus === 'authenticated' ?
        }
        </>
    ); */
}