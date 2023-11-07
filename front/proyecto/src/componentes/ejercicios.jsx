import React from 'react';

function Ejercicio(props) {
  return (
    <div className="ejercicio">
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Ejercicio;