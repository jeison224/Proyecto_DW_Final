import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { API_URL } from "../auth/constants";

export default function Login(){
    const [usuario,setUsuario] = useState("");
    const [contraseña,setContraseña] = useState("");
    const [errorResponse, setErrorResponse] = useState("")

    const auth = useAuth();
    const goTo= useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/login`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                    body: JSON.stringify({
                        usuario,
                        contraseña,
                    }),
            });
            if(response.ok){
                console.log("Ingreso Exitoso");
                setErrorResponse("");
                goTO("/");
            }else{
                console.log("Parece que hubo un error");
                const json = await response.json();
                setErrorResponse (json.body.error);
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />
    }
    return <form className="form" onSubmit={handleSubmit}>
        <DefaultLayout>
        <h1>Login</h1>
        {!!errorResponse && (<div className="MensajeError">{errorResponse}</div>)}
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