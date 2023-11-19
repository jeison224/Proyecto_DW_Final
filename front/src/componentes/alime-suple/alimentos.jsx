import React from 'react';
import Listar from './listarAlimentos';
import '../../estilos/alime-suple-style/alimentos.css'

const TipsAlimentacion = [
    {
        titulo: 'Desayuna de forma saludable',
        descripcion: 'Si haces ejercicio por la mañana, levántate lo suficientemente temprano para terminar el desayuno al menos una hora antes de tu entrenamiento. Debes estar bien alimentado antes de empezar a entrenar.'
    },
    {
        titulo: 'Controla el tamaño de la porción',
        descripcion: 'Comidas grandes. Cómelas por lo menos 3 o 4 horas antes de hacer ejercicio. Comidas pequeñas o refrigerios. Cómelas de 1 a 3 horas antes de hacer ejercicio'
    },
    {
        titulo: 'Come después de hacer ejercicio',
        descripcion: 'Para ayudar a que los músculos se recuperen y a reponer sus reservas de glucógeno, ingiere alguna comida que contenga hidratos de carbono y proteínas en el plazo de las dos horas posteriores a la sesión de ejercicios, si es posible.',
    },
    {
        titulo: 'Bebe mucha Agua',
        descripcion: 'Bebe aproximadamente de 473 a 710 mililitros de agua durante las 2 o 3 horas antes de tu entrenamiento.Bebe aproximadamente de 118 a 237 mililitros de agua cada 15 a 20 minutos durante tu entrenamiento. Ajusta las cantidades de acuerdo con el tamaño de tu cuerpo y el clima.'
    },
];
const TipsAlimentacion2 = [
    {
        titulo: 'Licuados',
        descripcion: 'Pueden ser de proteínas, chocolate y frutas variadas. Sin embargo, el ingrediente que los vuelve indispensables en tu dieta a la hora de ganar peso es la leche.'
    },
    {
        titulo: 'Carnes rojas',
        descripcion: 'De preferencia, bajas en grasa para no incrementar el colesterol. Con este ingrediente, aportarás un alto grado de proteínas, leucina y creatina, suplementos para la construcción muscular.'
    },
    {
        titulo: 'Salmón y pescados grasos',
        descripcion: 'Aportan un alto grado de proteínas, haciendo que ganes peso de una manera más rápida.',
    },
    {
        titulo: 'Aguacate',
        descripcion: 'Sinónimo de ingerir puras grasas saludables. Considéralo en cada una de tus comidas, pues es una excelente fuente de proteínas.'
    },
    {
        titulo: 'Frutos secos',
        descripcion: 'Tales como almendras, arándanos, nueces, semillas de girasol o cacahuates.'
    },
];
const TipsAlimentacion3 = [
    {
        titulo: 'Frutas',
        descripcion: 'Especialmente bajas en calorías como las bayas, melocotones o manzanas.'
    },
    {
        titulo: 'Huevo',
        descripcion: 'Rico en proteínas, controla el metabolismo y nutre tus músculos. Además, ayuda a quemar la grasa de tu cuerpo, en especial en la zona media. Este alimento es perfecto si estás en una dieta para definir abdomen.'
    },
    {
        titulo: 'Pescados magros',
        descripcion: 'Debido a las pocas calorías que estos contienen, son óptimos para incluir en tu dieta.'
    },
    {
        titulo: 'Yogurt natural',
        descripcion: 'Es un alimento perfecto para bajar de peso sin hacer dieta. Contiene mucho calcio y proteínas, además de ser bajo en calorías.'
    },
    {
        titulo: 'Verduras',
        descripcion: 'Todos sus tipos tienen muy pocas calorías y están llenas de vitaminas, minerales y fibra.'
    },
];

function Tips() {
    return (
        <div className="Tips-Alimentacion">
            <h2>Tips de Alimentacion</h2>
            <div>
                {TipsAlimentacion.map((listar, index) => (
                    < Listar key={index} titulo={listar.titulo} descripcion={listar.descripcion} />
                ))}
            </div>
            <h2>Tips de Alimentacion para Subir de Peso</h2>
            <div>
                {TipsAlimentacion2.map((listar, index) => (
                    < Listar key={index} titulo={listar.titulo} descripcion={listar.descripcion} />
                ))}
            </div>
            <h2>Tips de Alimentacion para Bajar de Peso</h2>
            <div>
                {TipsAlimentacion3.map((listar, index) => (
                    < Listar key={index} titulo={listar.titulo} descripcion={listar.descripcion} />
                ))}
            </div>
        </div>
    );
}

export default Tips;