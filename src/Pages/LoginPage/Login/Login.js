import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h1>please Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-outline-info">Google Sign In</button>
        </div>
    );
};

export default Login;