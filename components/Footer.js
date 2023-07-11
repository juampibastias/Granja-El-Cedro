import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer" style={{ background: "white" }}>
      <div className="divider-line"></div> {/* Nueva línea */}
      <div className="footer-logo">
        <img
          className="logo-blanco"
          src="images/logogc.png"
          alt="access"
          style={{ transform: "scale(0.7)" }}
        />
      </div>
      <ul>
        <li>
          <h5 style={{ color: "black" }}>Mapa del Sitio</h5>

          <ul>
            <li>
              <Link href="/nosotros">
                <a style={{ color: "black" }}>NOSOTROS</a>
              </Link>
            </li>
            <li>
              <Link href="/sucursales">
                <a style={{ color: "black" }}>SUCURSALES</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a style={{ color: "black" }}>PRODUCTOS</a>
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <h5 style={{ color: "black" }}>Dirección</h5>
          <p style={{ color: "black" }}>
          Chacabuco y Salta, San Martín, Tel: (0263) 15-466-8303
          </p>
          <p style={{ color: "black" }}>
          Av. Lima 910, M5570 San Martín, Tel: (0263) 15-466-8303
          </p>
        </li>
      </ul>
      <p style={{ color: "black" }}>Copyright © All Rights Reserved</p>
      <style jsx>{`
        .divider-line {
          width: 50%;
          height: 1px;
          background-color: black;
          margin: 0 auto;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
