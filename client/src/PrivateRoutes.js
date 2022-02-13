import React from "react";
import { Route, Navigate } from "react-router-dom";
import Auth from "./utils/auth";

import Profile from "./pages/Profile";

 
 export default function PrivateRoutes() {
    if (Auth.loggedIn()) {
   return (
   <>
   <Route exact path="/" element={<Profile />} />  
   </>
   );
 }
 else {
    return <Navigate to="/login" />;
  }
}
 