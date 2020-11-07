import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { authRoutes } from "../routes";

const LoggedInRoutes = user =>
    authRoutes.map((r, i) => (
        <Route
            key={i}
            path={r.path}
            exact={r.exact}
            render={props => <r.main {...props} user={user || {}} />}
        />
    ));

// const LoggedOutRoutes = unAuthRoutes.map((r, i) => (
//   <Route
//     key={i}
//     path={r.path}
//     exact={r.exact}
//     render={props => <r.main {...props} />}
//   />
// ));

const Main = ()  => {

    return (
        <BrowserRouter>
            {LoggedInRoutes()}
        </BrowserRouter>
    );
};



export default Main;
