import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthProvider"
import { API_URL } from "../auth/constants";
import { json } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import EjerciciosSection from "../componentes/EjerciciosSection";
import PortalLayout from "../layout/PortalLayout";

export default function Dashboard() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const auth = useAuth();

    useEffect(() => {
        cargarTodos();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        crearTodo();
    }

    async function crearTodo() {
        try {
            const response = await fetch(`${API_URL}/todos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.getAccessToken()}`,
                },
                body: JSON.stringify({
                    title,
                }),
            });

            if (response.ok) {
                const json = await response.json();
                setTodos([json, ...todos]);
            } else {

            }
        } catch (error) { }
    }

    async function cargarTodos() {
        try {
            const response = await fetch(`${API_URL}/todos`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.getAccessToken()}`
                }
            });
            if (response.ok) {

            } else {
                //mostrar error
            }
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error("Error al cargar todos:", error);
        }
    }
    return (
        <PortalLayout>
            <div>
                <h1>Dashboard de {auth.getUser()?.nombre || ""}</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nuevo todo..."
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} />
                </form>
                {todos.map((todo) => (
                    <div key={todo._id}>{todo.title}</div>
                ))}
                <Routes>
          <Route path="/" element={<div>Contenido principal del Dashboard</div>} />
          <Route path="/ejercicios" element={<EjerciciosSection />} />
        </Routes>
            </div>
        </PortalLayout>

    );
}