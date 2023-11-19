import React from 'react';
//import '../estilos/ejercicios.css'

function Ejercicio(props) {
  return (
    <div className="ejercicio">
      <h3>{props.titulo}</h3>
      <img src={`/imgGym/${props.imagen}`} alt={props.titulo}/>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Ejercicio;