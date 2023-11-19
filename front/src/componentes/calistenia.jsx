import React from 'react';
import Ejercicio from './ejercicios';
import '../estilos/ejercicio-style/listarEjercicios.css'

const ejerciciosCalistenia = [
    {
        titulo: 'Flexiones de pecho',
        descripcion: 'Fortalece el pecho y los brazos.',
        imagen: 'pecho.jpg'
    },
    {
        titulo: 'Pull-ups',
        descripcion: 'Excelente para fortalecer la espalda y los bíceps.',
        imagen: 'pull.jpg'
    },
    {
        titulo: 'Abdominales en Barra',
        descripcion: 'Excelente para fortalecer los abdominales.Puede hacerse encogiendo los pies o con los pies totalmente extendidos',
        imagen: 'abd.jpg'

    },
    {
        titulo: 'Fondos de Triceps',
        descripcion: 'Fortalece los triceps.Cuida tu postura y la tecnica controlada',
        imagen: 'fondotri.jpg'

    },
    {
        titulo: 'Sentadillas',
        descripcion: 'Trabaja las piernas y glúteos.',
        imagen: 'senta.jpg'
    },
    {
        titulo: 'Flexiones Diamante',
        descripcion: 'Fortalece el pecho y los triceps.Procura formar un tringulo con tus manos y bajar los mas controlado posible',
        imagen: 'diamante.jpg'

    },
    {  
        titulo: 'Plancha',
        descripcion: 'Fortalece el abdomen.Intenta aguntar el mayor tiempo posible teniendo espalda y caderas rectas',
        imagen: 'plancha.jpg'

    },
    {
        titulo: 'Avanzadas',
        descripcion: 'Trabaja las piernas y glúteos.Manten el torso erguido cuando se da el paso hacia adelante.Manten una posición de 90 grados con la pierna.',
        imagen: 'avanzada.jpg'

    },
    {
        titulo: 'Elevacion de Piernas',
        descripcion: 'Fortalece el abdomen.Trata de reazlizar el ejercicio de forma controlada y progresiva',
        imagen: 'elevacion.jpg'

    },
];

function ejercicosCalistenia() {
    return (
        <div className="calistenia">
            <h2>Ejercicios de Calistenia</h2>
            <div>
                {ejerciciosCalistenia.map((ejercicio, index) => (
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
export default ejercicosCalistenia;