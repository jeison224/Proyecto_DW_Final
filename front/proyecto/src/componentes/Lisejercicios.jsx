import React from 'react';
import Ejercicio from './ejercicios';

const ejercicios = [
  {
    titulo: 'Press de banca',
    descripcion: 'Ejercicio para el pecho',
  },
  {
    titulo: 'Sentadillas',
    descripcion: 'Ejercicio para las piernas',
  },
  {
    titulo: 'Dominadas',
    descripcion: 'Ejercicio para la espalda',
  },
];

function ListaEjercicios() {
  return (
    <div className="lista-ejercicios">
      <h2>Ejercicios de Gimnasio</h2>
      {ejercicios.map((ejercicio, index) => (
        <Ejercicio key={index} titulo={ejercicio.titulo} descripcion={ejercicio.descripcion} />
      ))}
    </div>
  );
}

export default ListaEjercicios;