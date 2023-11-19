import React from 'react';
import ListarVida from './listarfitness';
import '../../estilos/Vida-fit-style/listarfitness.css'

const VidaFitness = [
    {
        titulo: 'Push-Pull-Leg',
        descripcion: 'La rutina push/pull/legs es un método de entrenamiento muy simple en el que divides tu cuerpo en tres partes. Y cada parte se entrena en su propio día separado.'
    },
    {
        titulo: 'Torso-Pierna',
        descripcion: 'Las rutinas torso pierna son características principalmente por trabajar dos días a la semana la zona superior del cuerpo, torso y otros dos días la zona inferior, pierna, alternando un día de torso con un día de pierna.'
    },
    {
        titulo: 'Full-Body',
        descripcion: 'La rutina fullbody combina ejercicios que trabajan más de un grupo muscular con otros que se centran en un solo músculo concreto, pero siempre entrenando todas las partes del cuerpo.'
    },
]
function VidaFit() {
    return (
        <div className="Fitness">
            <h2>Rutinas</h2>
            <div>
                {VidaFitness.map((vida, index) => (
                    < ListarVida key={index} titulo={vida.titulo} descripcion={vida.descripcion} />
                ))};
            </div>
        </div>
    );
}

export default VidaFit;