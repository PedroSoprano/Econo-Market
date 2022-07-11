import { createContext } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export const AddProductContext = createContext([]);

export const AddProductProvider = ({ children }) => {
  const base_URL = "https://ecomarketapi.herokuapp.com";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnN1bWlkb3JAZ21haWwuY29tIiwiaWF0IjoxNjU3NDgyNTY2LCJleHAiOjE2NTc0ODYxNjYsInN1YiI6IjEifQ.a0kPcfMLVfH3OagjxOAr2z8cvXZz0baNgDoKTay_pI0";

  //   const token = JSON.parse(localStorage.getItem("token"));

  const notifyError = () => toast.error("Produto já está na lista de desejos.");

  const notifySuccess = () =>
    toast.success("Produto adicionado à lista de desejos!");

  const registerProduct = (product) => {
    axios
      .post(`${base_URL}/products`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <AddProductContext.Provider value={{ registerProduct }}>
      {children}
    </AddProductContext.Provider>
  );
};
