import React from 'react';
import Listar2 from './listarSuplementos';
import '../../estilos/alime-suple-style/suplementos.css'

const Creatinas = [
    {
        titulo: 'Micronized Creatine',
        descripcion: '-Monohidratada.-Laboratorio muy recomendado y reconocido.-Creatina On 300 gr 60 servicios.-Aumento de fuerza.-Resistencia en los entrenamientos.-Evita catabolismo muscular',
        imagen: 'creatinamicronizada.jpg'
    },
    {
        titulo: 'CreaStack',
        descripcion: '-Sabor a frutos rojos, evita catabolismo muscular y aumenta la fuerza.-3 g Monohidrato de Creatina.-1 g HMB (hidroximetilbutirato).-20 mg sulfato de vanadio.-50 mg ácido alfa lipoico',
        imagen: 'creastack.jpg'

    },
    {
        titulo: 'CellTech',
        descripcion: '-Es una mezcla de monohidrato de creatina y carbohidratos.-5 gr de monohidrato de creatina.-38 g de carbohidratos.-14 g azúcar.-5 g de aminoácidos',
        imagen: 'celltech.jpg'

    },
    {
        titulo: 'Creatine Ultra Pure',
        descripcion: '-Monohidratada.-Laboratorio recomendado.-300 gr 60 servicios.-Aumento de fuerza.-Resistencia en los entrenamientos.-Evita catabolismo muscular',
        imagen: 'creatinaultra.jpg'

    },
    {
        titulo: 'Legacy',
        descripcion: '-Creatina HCL.-Leucina y Betaina.-50 servicios.-Aumento de fuerza.-Resistencia en los entrenamientos.-Evita catabolismo muscular',
        imagen: 'legacyproscience.jpg'

    },
    {
        titulo: 'Vitanas',
        descripcion: '-Creatina monohidratada y micronizaa.-Leucina y Betaina.-60 servicios.-3gr de creatina monohidratada.-Resistencia en los entrenamientos.-Evita catabolismo muscular',
        imagen: 'vitanas.jpg'

    },
];
const GanadoresdePeso = [
    {
        titulo: 'Serious Mass',
        descripcion: '-Es el único ganador de peso que te aportará 1250 calorias.-252 gr de cabohidratos por servicio además de 50 gr de proteína, vitaminas y minerales.-Además de creatina y glutamina.',
        imagen: 'serious.jpg'

    },
    {
        titulo: 'Smart Gainer',
        descripcion: '-Producto para ganar masa muscular y fuerza.-920 calorias.-169 gr de carbohidratos.-44 gr de proteina.-3 gr de creatina HCL',
        imagen: 'proscience.jpg'
    },
    {
        titulo: 'Titan Army',
        descripcion: '-Es una proteína hipercalórica de suero concentrado.-50 g de proteína de suero concentrado.-175 g de carbohidrato.-10 g de grasa.-1000 calorías por servicio',
        imagen: 'titan.jpg'

    },
    {
        titulo: 'TNT Mega Mass Gainer',
        descripcion: '-Es una proteína hipercalórica de suero concentrado.-80 g de proteína.-20 gr de BCAA´S.-10 g de grasa.-1900 calorías por servicio',
        imagen: 'tnt.jpg'

    },
    {
        titulo: 'Super Mega Gainer',
        descripcion:'-Es una proteína hipercalórica.-40 g de proteína.-1000mg de BCAA´S.-10 g de grasa.-1020 calorías por servicio',
        imagen: 'supermegagainer.jpg'

    },
    {
        titulo: 'Mass Tech Extreme',
        descripcion: '-Aporta por servicio 60g de proteína (de los cuales 13.3g de BCAA y 10g de Glutamina).-441g de carbohidrato.-6g de grasa.-2060 calorías.-Endulzada con sucralosa y acesulfame de potasio.',
        imagen: 'mass.jpg'

    },
];
const Proteinas = [
    {
        titulo: 'Whey Pure',
        descripcion: 'Whey Pure ss un suplemento de proteína aislada, endulzado con sucralosa (Stevia), lo que lo convierte en un aliado para aquellas personas que estén en procesos de perdida de peso o definición muscula.',
        imagen: 'wey.jpg'

    },
    {
        titulo: 'Isolate Gourmet',
        descripcion: 'ISOLATE GOURMET Es un aislado e hidrolizado de suero de leche es obtenida a través de CFM (Microﬁltración por Flujo Cruzado) que asegura su calidad y pureza.',
        imagen: 'iso.jpg'

    },
    {
        titulo: 'Bi-Pro Classic',
        descripcion: 'Bipro Classic es una proteina de suero de alta pureza y concentración, con mínimos niveles de grasa y lactosa.',
        imagen: 'bipro.jpg'

    },
    {
        titulo: 'Best Protein',
        descripcion: 'Best Protein es un Alimento en polvo a base de proteina aislada de suero con L-Leucina, CaseinaMicelar,',
        imagen: 'best.jpg'

    },
    {
        titulo: 'Gold Standard Whey',
        descripcion: 'Gold Standard 100% Whey es una mezcla de proteínas de suero de leche que contiene aislado de proteína de suero WPI, Concentrado de Proteína de Suero de Leche e Hidrolizado de Aislado de Suero.',
        imagen: 'gold.jpg'

    },
    {
        titulo: '100% Whey Elite',
        descripcion: '100% WHEY ELITE Es una combinación de proteinas obtenidas de suero lácteo concentrado y aislado, con BCAA´s, Aminoácidos Esenciales y Glutamina.',
        imagen: 'elite.jpg'

    },
];

function Tips() {
    return (
        <div className="Suplementos">
            <h2>Creatinas</h2>
            <div>
                {Creatinas.map((listar2, index) => (
                    < Listar2 key={index} titulo={listar2.titulo} descripcion={formatDescripcion(listar2.descripcion)} imagen={listar2.imagen} />
                ))}
            </div>
            <h2>Ganadores de Peso</h2>
            <div>
                {GanadoresdePeso.map((listar2, index) => (
                    < Listar2 key={index} titulo={listar2.titulo} descripcion={formatDescripcion(listar2.descripcion)} imagen={listar2.imagen} />
                ))}
            </div>
            <h2>Proteinas</h2>
            <div>
                {Proteinas.map((listar2, index) => (
                    < Listar2 key={index} titulo={listar2.titulo} descripcion={formatDescripcion(listar2.descripcion)} imagen={listar2.imagen} />
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

export default Tips;