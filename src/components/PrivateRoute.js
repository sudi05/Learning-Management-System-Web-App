import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const users = [
    { email: 'user1@gmail.com', password: 'user1@123' },
    { email: 'user2@gmail.com', password: 'user2@456' },
    { email: 'user3@gmail.com', password: 'user3@789' },
];

const PrivateRoute = ({component: Component, ...rest}) => {
    const navigate = useNavigate();
    const isAuthenticated = checkAuthentication();

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    navigate.push('/loginPage')
                )
            }
        />
    );
};

const checkAuthentication = () => {
    const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
    
    if(storedCredentials) {
        const { email, password } = storedCredentials;
        const user = users.find(
            (user) =>
                user.email === email && user.password === password
        );
        return user !== undefined;
    }
    return false;
};

export default PrivateRoute;
