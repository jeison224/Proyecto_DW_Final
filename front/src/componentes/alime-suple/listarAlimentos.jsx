import React from 'react';
//import '../estilos/.css'

function Listar(props) {
  return (
    <div className="listar">
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Listar;