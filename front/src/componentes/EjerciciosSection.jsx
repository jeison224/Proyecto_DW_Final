import React from "react";
import ListaEjercicios from "./Lisejercicios";
//import '../estilos/EjerciciosSection.css'


export default function EjerciciosSection() {
  return (
    <div className="fondo">
      <h2 className="h2fondo">Sección de Ejercicios</h2>
      <ListaEjercicios />
    </div>
  );
}
