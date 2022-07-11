import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const base_URL = "https://ecomarketapi.herokuapp.com";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnN1bWlkb3JAZ21haWwuY29tIiwiaWF0IjoxNjU3NDgyNTY2LCJleHAiOjE2NTc0ODYxNjYsInN1YiI6IjEifQ.a0kPcfMLVfH3OagjxOAr2z8cvXZz0baNgDoKTay_pI0";

  // const token = JSON.parse(localStorage.getItem("token"));

  const notifyErrorNoToken = () =>
    toast.error("Você precisa estar logado para reservar um produto.");

  const notifySuccess = () => toast.success("Produto reservado com sucesso!");

  const notifyRemoved = () =>
    toast.warning("Produto removido da lista de reservados.");

  const productsRequest = () => {
    axios
      .get(`${base_URL}/products`)
      .then((response) => setProductList(response.data))
      .catch((err) => console.log(err));
  };

  const addToReserved = (product) => {
    if (token === null) {
      notifyErrorNoToken();
    } else {
      axios
        .post(`${base_URL}/reserved`, product, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          notifySuccess();
          return response;
        })
        .catch((err) => console.log(err));
    }
  };

  const removeFromReserved = (productId) => {
    axios
      .delete(`${base_URL}/reserved/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        notifyRemoved();
        return response;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    productsRequest();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productList,
        productsRequest,
        addToReserved,
        removeFromReserved,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
