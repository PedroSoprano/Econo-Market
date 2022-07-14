import { createContext, useState } from "react";
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
<<<<<<< HEAD
=======
    const token = localStorage.getItem("token");
    token !== null &&
>>>>>>> 449cda05f5372cb0a6362acc3b3b95988e6990aa
    axios
      .get(`${base_URL}/reserved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUserReservedList(response.data))
      .catch((err) => console.log(err));
  };

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
