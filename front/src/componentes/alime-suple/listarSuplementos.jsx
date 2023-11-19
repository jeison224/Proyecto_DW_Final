import React from 'react';
//import '../estilos/.css'

function Listar2(props) {
  return (
    <div className="listar2">
      <h3>{props.titulo}</h3>
      <img src={`/img/${props.imagen}`} alt={props.titulo}/>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Listar2;