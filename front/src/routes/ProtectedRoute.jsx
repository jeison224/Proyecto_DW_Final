import { useState } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute(){

    const auth= useAuth();
    
    return isAuth ? <Outlet /> : <Navigate to= "/" />
}