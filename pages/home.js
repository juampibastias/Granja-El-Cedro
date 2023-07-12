import React from "react";
import Head from "next/head";
import Image from "next/image";
import banner from "../public/images/granjahuevos.png";
import banner1 from "../public/images/granjagallinas.png";
import banner2 from "../public/images/granjavacas.png";
import { Carousel } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import { useRouter } from "next/router";

const Home = (props) => {
  const [products, setProducts] = useState(props.products);

  const [isCheck, setIsCheck] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  const handleDeleteAll = () => {
    let deleteArr = [];
    products.forEach((product) => {
      if (product.checked) {
        deleteArr.push({
          data: "",
          id: product._id,
          title: "Eliminar todos los productos seleccionados?",
          type: "DELETE_PRODUCT",
        });
      }
    });

    dispatch({ type: "ADD_MODAL", payload: deleteArr });
  };

  const handleLoadmore = () => {};
  return (
    <div className="contenedor-home">
      <Head>
        <title>GRANJA EL CEDRO - HOME</title>
      </Head>
      <Carousel prevLabel="" nextLabel="">
        <Carousel.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="d-block"
              src={banner1}
              alt="First slide"
              style={{ width: "100%" }}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="d-block"
              src={banner2}
              alt="Second slide"
              style={{ width: "100%" }}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="d-block"
              src={banner}
              alt="Third slide"
              style={{ width: "100%" }}
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
