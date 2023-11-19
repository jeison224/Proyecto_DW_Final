import React from 'react';
//import '../estilos/.css'

function ListarVida(props) {
  return (
    <div className="vida">
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default ListarVida;