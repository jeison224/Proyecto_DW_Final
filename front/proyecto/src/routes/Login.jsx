import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";

export default function Login(){
    const [usuario,setUsuario] = useState("");
    const [contraseña,setContraseña] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />
    }
    return <form className="form">
        <DefaultLayout>
        <h1>Login</h1>
        <label>Usuario</label>
        <input type="text" value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        />
        
        <label>Contraseña</label>
        <input type="password" value={contraseña} 
         onChange={(e) => setContraseña(e.target.value)}
        />

        <button>Iniciar Sesion</button>
        </DefaultLayout>
        
    </form>
}