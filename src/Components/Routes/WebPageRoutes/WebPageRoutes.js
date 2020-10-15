import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../WebPages/Dashboard";
import Home from "../../WebPages/Home"
import UserVerificationConfirmation from "../../WebPages/VerificationConfirmation";
import UserVerificationRequest from "../../WebPages/VerificationRequest";

const WebpageRoutes = () => (
    <>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/verificationRequest" component={UserVerificationRequest} />
        <Route exact path="/verify" component={UserVerificationConfirmation} />
    </>
);

export default WebpageRoutes