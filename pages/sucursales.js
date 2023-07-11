import React from "react";
import Head from "next/head";

export const Sucursales = () => {
  return (
    <div className="contenedor-sucursales">
      <Head>
        <title>ACCESS - SUCURSALES</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>

      <div className="card-container">
        <div className="card" style={{ width: "90%" }}>
          <img
            src="/images/junin.PNG"
            className="card-img-top"
            alt="junin"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">Chacabuco y Salta</h5>
            <p className="card-text">
              <address>
                Chacabuco y Salta, San Martín <br />
                Tel:
                <a href="tel:+540263154668303">(0263)15-466-8303</a>
              </address>
            </p>
            <a
              href="https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AB5stBiL_qSepplCEO6GM3L0Dk3dqhxL9w:1689108647401&q=granja+el+cedro&rflfq=1&num=10&rllag=-33075155,-68476639,481&rldimm=3458369324831141170&ved=2ahUKEwjX_6iHxIeAAxWnqJUCHY4NAtEQu9QIegQIHBAM#rlfi=hd:;si:16116615701922072868,l,Cg9ncmFuamEgZWwgY2Vkcm9I08qI1-WAgIAIWicQABABEAIYABgBGAIiD2dyYW5qYSBlbCBjZWRybyoICAIQABABEAKSAQRmYXJtqgE4EAEyHxABIhsnmvFkWLqlJqrtz8GK4DGVK0-yXXahDhwswEkyExACIg9ncmFuamEgZWwgY2Vkcm8;mv:[[-33.0710429,-68.47356669999999],[-33.0792688,-68.47971249999999]]"
              className="btn"
              target="_blank"
            >
              Ver en mapa
            </a>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card" style={{ width: "90%" }}>
          <img
            src="/images/rivadavia.PNG"
            className="card-img-top"
            alt="rivadavia"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">Av. Lima 910</h5>
            <p className="card-text">
              <address>
                Av. Lima 910, M5570 San Martín
                <br />
                Tel:
                <a href="tel:+540263154668303">(0263)15-466-8303</a>
              </address>
            </p>
            <a
              href="https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AB5stBiL_qSepplCEO6GM3L0Dk3dqhxL9w:1689108647401&q=granja+el+cedro&rflfq=1&num=10&rllag=-33075155,-68476639,481&rldimm=3458369324831141170&ved=2ahUKEwjX_6iHxIeAAxWnqJUCHY4NAtEQu9QIegQIHBAM#rlfi=hd:;si:3458369324831141170;mv:[[-33.0710429,-68.47356669999999],[-33.0792688,-68.47971249999999]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2"
              className="btn"
              target="_blank"
            >
              Ver en mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sucursales;
