import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export const ReservedContext = createContext([]);

export const ReservedProvider = ({ children }) => {
  const [userReservedList, setUserReservedList] = useState([]);
  const [sellerReservedList, setSellerReservedList] = useState([]);

  const base_URL = "https://ecomarketapi.herokuapp.com";

  const token = localStorage.getItem("token");

  function deleteSuccess() {
    toast.success("Produto removido com sucesso!");
  }

  const userReservedListRequest = () => {
    axios
      .get(`${base_URL}/reserved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUserReservedList(response.data))
      .catch((err) => console.log(err));
  };

  // const sellerReservedListRequest = () => {
  //   const token = localStorage.getItem("token");
  //   const userId = localStorage.getItem("id");
  //   axios
  //     .get(`${base_URL}/reserved?_expand=user&sellerId=${userId}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log("montou");
  //       return setSellerReservedList(response);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   sellerReservedListRequest();
  // });

  const addToReservedItem = () => {
    const token = localStorage.getItem("token");
    axios
      .patch(`${base_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleDeleteReserved = (id) => {
    axios
      .delete(`${base_URL}/reserved/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => deleteSuccess())
      .catch((err) => console.log(err));
  };

  return (
    <ReservedContext.Provider
      value={{
        userReservedListRequest,
        addToReservedItem,
        userReservedList,
        setUserReservedList,
        sellerReservedList,
        setSellerReservedList,
        handleDeleteReserved,
      }}
    >
      {children}
    </ReservedContext.Provider>
  );
};
