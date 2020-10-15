import React from "react";
import { Route } from "react-router-dom";
import Login from "../../WebPages/SignIn";
import Register from "../../WebPages/Register";

const OnboardingRouter = () => (
    <>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </>
);

export default OnboardingRouter