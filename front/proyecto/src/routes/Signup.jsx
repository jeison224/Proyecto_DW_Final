import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";

export default function SignUp(){
    const [nombre,setNombre] = useState("");
    const [usuario,setUsuario] = useState("");
    const [contraseña,setContraseña] = useState("");
    const auth = useAuth();
    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/signup`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                    body: JSON.stringify({
                        nombre,
                        usuario,
                        contraseña,
                    }),
            });
            if(response.ok){
                console.log("Usuario creado con exito");
            }else{
                console.log("Parece que hubo un error");
            }
        } catch (error) {
            console.log(error);
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />
    }

    return(
        <DefaultLayout>
        <form className="form" onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <label>Nombre</label>
        <input type="text" value={nombre} 
        onChange={(e) => setNombre(e.target.value)}
         />

        <label>Usuario</label>
        <input type="text" value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        />
        
        <label>Contraseña</label>
        <input type="password" value={contraseña} 
         onChange={(e) => setContraseña(e.target.value)}
        />

        <button>Crear</button>
        </form>
        </DefaultLayout>
    );
}