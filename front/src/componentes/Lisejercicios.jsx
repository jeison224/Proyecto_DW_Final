import React from 'react';
import Ejercicio from './ejercicios';
import '../estilos/ejercicio-style/listarEjercicios.css'

const ejercicios = [
  {
    titulo: 'Press de banca',
    descripcion: 'Ejercicio para el pecho.Puede hacerse con mancuernas o con barra',
    imagen: 'press.jpg'
  },
  {
    titulo: 'Sentadillas',
    descripcion: 'Ejercicio para las piernas.Asegurate de tener la espalda recta para evitar lesiones',
    imagen: 'sentadilla.jpg'
  },
  {
    titulo: 'Pull Over',
    descripcion: 'Ejercicio para la espalda.Con enfoque en las dorsales',
    imagen: 'pullover.jpg'
  },
  {
    titulo: 'Press de militar',
    descripcion: 'Ejercicio para los hombros. Puede hacerse con barra o mancuernas',
    imagen: 'militar.jpg'
  },
  {
    titulo: 'Extension de Triceps en polea',
    descripcion: 'Ejercicio para los triceps.Manten una buena posicion.Puedes utilizar diferentes agarres para trabjar completamente el triceps',
    imagen: 'triceps.jpg'

  },
  {
    titulo: 'Curl de Biceps',
    descripcion: 'Ejercicio para los biceps.Puede hacerse con barra o mancuernas.Rango de movimiento controlado',
    imagen: 'biceps.jpg'
  },
  {
    titulo: 'Bulgaras',
    descripcion: 'Ejercicio para gluteo y piernas.Puede hacer en maquina smith o con mancuernas',
    imagen: 'bulgara.jpg'

  },
  {
    titulo: 'Extension de Cuadriceps',
    descripcion: 'Ejercicio para los cuadriceps.Puede ser con las dos piernas o solo con una por serie',
    imagen: 'extensiones.jpg'

  },
  {
    titulo: 'Aperturas en Polea',
    descripcion: 'Ejercicio para el pecho.Polea alta para trabajar la parte baja del pectoral.Polea media para trabajar la parte media del pectoral.Polea baja para la parte alta del pectoral',
    imagen: 'aperturas.jpg'

  },
];

function ListaEjercicios() {
  return (
    <div className="lista-ejercicios">
      <h2>Ejercicios de Gimnasio</h2>
      <div>
      {ejercicios.map((ejercicio, index) => (
        <Ejercicio key={index} titulo={ejercicio.titulo} descripcion={formatDescripcion(ejercicio.descripcion)} imagen={ejercicio.imagen} />
      ))}
      </div>
    </div>
  );
}
function formatDescripcion(descripcion) {
  const lineBreaks = descripcion.split('.').map((sentence, index, array) => (
    <React.Fragment key={index}>
      {sentence.trim()}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
  return lineBreaks;
}
export default ListaEjercicios;