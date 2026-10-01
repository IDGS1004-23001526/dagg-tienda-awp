import { useState, useEffect } from 'react';
import empaquetada_img from './assets/empaquetada.jpg'
import lechuga_img from './assets/lechuga.jpg'
import mayonesa_img from './assets/mayonesa.jpg'
import raos_img from './assets/Raos.jpg'
import PWABadge from './PWABadge.jsx'

  let images = {
      image1: {empaquetada_img},
      image2: {lechuga_img},
      image3: {mayonesa_img},
      image4: {raos_img}
  };

function InfoProduct(info){
  return (
    <div>
      <h2>{info.title}</h2>
      <img src={info.image} alt="Productos" className = "img-fluid rounded" style={{maxWidth: "300px"}}/>
    </div>
  );
}

function InfoProductoDescripcion(info){
  return (
      <p>{info.descripcion}</p>
  );
}

function BloqueProduct () {
  return (
    <div>
      <h2>Seccion productos</h2>
      <div>
        <InfoProduct title = "Lechuga" image = {lechuga_img}  />
        <InfoProductoDescripcion descripcion = "Lechuga fresca para ensaladas a tu gusto" />
      </div>
      <div>
        <InfoProduct title = "Empaquetado de enladata" image = {empaquetada_img}  />
        <InfoProductoDescripcion descripcion = "Enlatada de ensalada para facil consumo" />
      </div>
      <div>
        <InfoProduct title = "Verdura Raos" image = {raos_img}  />
        <InfoProductoDescripcion descripcion = "Rica verdura de Raos italiana" />
      </div>
      <div>
        <InfoProduct title = "Mayonesita" image = {mayonesa_img}  />
        <InfoProductoDescripcion descripcion = "Mayonesa para acompañar tus comidas con mas sabor" />
      </div>
    </div>
  );
}


function DireccionDonaPelos() {
  return (
    <footer>
      <h1>Donde me encuentro</h1>
      <p>A la vuelta de la esquina</p>
    </footer>
  );
}

function ApiCualsea() {
  return (
    <div>
      <GetCarnes />
    </div>
  );
}

function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargando(false); 
    }, 3000);

    return () => clearTimeout(temporizador);
  }, []); 

  if (cargando) {
    return (
      <div className="container text-center py-5">
        <h2 className="text-primary mt-5"></h2>
        <p className="text-muted">1...2...3</p>
      </div>
    );
  }

  return (
    <>
      <div className="container text-center py-4 bg-white rounded shadow mt-4">
        <h1 className="text-danger fw-bold">Tiendita de doña pelos</h1>
        <BloqueProduct />
        <hr className="my-4"/>
        <DireccionDonaPelos />
      </div>
    </>
  )
}

async function GetCarnes(){
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

  let data = await response.json();
} 

export default App
