import React from "react";
import Head from "next/head";

export const Nosotros = () => {
  return (
    <div className=" contenedor-nosotros ">
      <Head>
        <title>ACCESS - NOSOTROS</title>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
      </Head>

      <div className="contenedor-imagen">
        <img src="images/nosotros.jpg" className="card-img-top" alt="..." />
      </div>
      <div className="contenedor-texto">
        <p>
          En Granja El Cedro nos dedicamos a proporcionar huevos frescos y de
          calidad al por mayor. Nuestra granja se enorgullece de ofrecer
          productos frescos y deliciosos que satisfacen las necesidades de
          nuestros clientes.
        </p>
        <p>¿Por qué elegirnos?</p>
        <ul>
          <li>
            Calidad: Nuestros huevos frescos son cuidadosamente seleccionados
            para garantizar la máxima calidad. Trabajamos arduamente para
            mantener altos estándares de frescura y sabor en cada uno de
            nuestros productos.
          </li>
          <li>
            Variedad: Ofrecemos una amplia variedad de huevos frescos para
            satisfacer las necesidades de nuestros clientes. Ya sea que estés
            buscando huevos de gallina, huevos de codorniz u otras opciones, en
            Granja El Cedro encontrarás lo que necesitas.
          </li>
          <li>
            Servicio al cliente: Nos esforzamos por brindar un excelente
            servicio al cliente. Nuestro amable y atento equipo está disponible
            para responder a tus preguntas y ayudarte a encontrar los productos
            adecuados para tu negocio.
          </li>
          <li>
            Ubicación conveniente: Te esperamos en nuestra sucursal ubicada en
            Calle Lima 91, San Martín, Mendoza. Es fácil acceder a nuestras
            instalaciones para recoger tus pedidos de huevos frescos.
          </li>
          <li>
            Compromiso con la calidad: En Granja El Cedro nos preocupamos por la
            calidad y el bienestar animal. Nuestras gallinas son criadas en
            condiciones óptimas, lo que garantiza la frescura y el sabor
            excepcionales de nuestros huevos.
          </li>
        </ul>
        <p>
          ¡Visítanos en Granja El Cedro y descubre por qué somos tu mejor opción
          para obtener huevos frescos al por mayor!
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
