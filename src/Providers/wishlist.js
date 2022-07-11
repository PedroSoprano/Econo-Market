import { createContext } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export const WishlistContext = createContext([]);

export const WishlistProvider = ({ children }) => {
  const base_URL = "https://ecomarketapi.herokuapp.com";

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnN1bWlkb3JAZ21haWwuY29tIiwiaWF0IjoxNjU3MjkwNjU0LCJleHAiOjE2NTcyOTQyNTQsInN1YiI6IjEifQ.9qC_qujWuv3f59vPSkNZAaCkhnWIOYGgYMPP0nuwrDU";

  const token = JSON.parse(localStorage.getItem("token"));

  const notifyErrorNoToken = () =>
    toast.error("Você precisa estar logado para favoritar um produto.");

  const notifyError = () => toast.error("Produto já está na lista de desejos.");

  const notifySuccess = () =>
    toast.success("Produto adicionado à lista de desejos!");

  const addToWishlist = (product) => {
    if (token === null) {
      notifyErrorNoToken();
    } else {
      axios
        .post(`${base_URL}/wishlist`, product, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => notifySuccess())
        .catch((err) => {
          if (err.response.status === 500) {
            notifyError();
          }
        });
    }
  };

  const getWishlist = (userId) => {
    axios
      .get(`${base_URL}/users/${userId}?_embed=wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response)
      .catch((err) => console.log(err));
  };

  return (
    <WishlistContext.Provider value={{ addToWishlist, getWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
