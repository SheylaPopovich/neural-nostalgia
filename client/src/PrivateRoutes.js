import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./utils/auth";

import Profile from "./pages/Profile";

 
 export default function PrivateRoutes() {
    if (Auth.loggedIn()) {
   return (
   <>
   <Route exact path="/" component={Profile} />
   
   </>
   );
 }
 else {
    return <Redirect to="/login" />;
  }
}
 