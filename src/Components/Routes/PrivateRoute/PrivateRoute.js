import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';


const PrivateRoute = ({ component: Component, ...props }) => {
    const cookies = new Cookies();
    const token = cookies.get('JWT', { path: '/' });

    return (
        <Route
            {...props}
            render={props => token ? <Component {...props} /> : <Redirect to="/login" />}
        />
    );

};

export default PrivateRoute;