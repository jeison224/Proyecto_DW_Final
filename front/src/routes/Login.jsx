import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { API_URL } from "../auth/constants";

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [errorResponse, setErrorResponse] = useState("")

    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usuario,
                    contraseña,
                }),
            });

            if (!response.ok) {
                console.log("Parece que hubo un error");
                const json = await response.json();
                setErrorResponse(json.body.error);
                return;
            }

            console.log("Ingreso Exitoso");
            setErrorResponse("");
            const json = await response.json();
            console.log("Datos de inicio de sesión:", json); // Agrega este registro de consola
            if (json.body.accessToken && json.body.refreshToken) {
                auth.saveUser(json);
                console.log("Redirigiendo a /dashboard");
                goTo("/dashboard");

            }

        } catch (error) {
            console.log(error);
        }
    }

    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                <h1>INGRESO</h1>
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
            </form>
        </DefaultLayout>
    );
}