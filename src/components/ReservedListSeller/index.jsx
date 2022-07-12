import "./style.css";

import { ProductContext } from "../../Providers/products";

import { useState, useContext, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { FaUser, FaShoppingBasket } from "react-icons/fa";

import PageTitle from "../PageTitle";
import DialogMenu from "../DialogMenu";
import FormDialog from "../FormDialog";
import ProductForm from "../ProductForm";
import EditSellerForm from "../EditSellerForm";
import SellerReservedItem from "../SellerReservedItem";
import { ReservedContext } from "../../Providers/reserved";

function ReservedListSeller({ type }) {
  const base_URL = "https://ecomarketapi.herokuapp.com";

  const { productList } = useContext(ProductContext);
  const { sellerReservedList, setSellerReservedList } =
    useContext(ReservedContext);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`${base_URL}/reserved?_expand=user&sellerId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setSellerReservedList(response.data))
      .catch((err) => console.log(err));
  }, [token, userId, setSellerReservedList]);

  console.log(sellerReservedList);

  const userOrders = [];

  if (sellerReservedList.length > 0) {
    const userArr = [];
    sellerReservedList.forEach((product) => {
      userArr.push(product.user.id);
    });

    const uniqueIds = [...new Set(userArr)];
    console.log(userArr);
    console.log(uniqueIds);

    uniqueIds.forEach((user) => {
      const userList = [];
      sellerReservedList.forEach((product) => {
        if (product.user.id === user) {
          userList.push(product);
        }
      });

      userOrders.push(userList);
    });
  }

  console.log(userOrders);

  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openProductForm, setOpenProductForm] = useState(false);

  const menuList = ["Cadastrar produto", "Minha Conta", "Meus Produtos"];

  const handleOpenDialogMenu = () => {
    setOpenMenu(true);
  };

  const handleOpenDialogForm = () => {
    setOpenForm(true);
  };

  const handleOpenProductForn = () => {
    setOpenProductForm(true);
  };

  const navigateToReserved = () => {
    navigate("/seller/dashboard");
  };

  return (
    <>
      <PageTitle title={"Produtos Reservados"}>
        <div>
          <button className="menuLowRes" onClick={handleOpenDialogMenu}>
            +
          </button>

          <DialogMenu
            open={openMenu}
            setOpen={setOpenMenu}
            menuList={menuList}
          />
        </div>
        <button className="addProducts" onClick={handleOpenProductForn}>
          Cadastrar produtos
        </button>
        <FormDialog open={openProductForm} setOpen={setOpenProductForm}>
          <ProductForm />
        </FormDialog>
      </PageTitle>

      <div className="reservedSellerContainer">
        <div className="controlBtns">
          <button className="accountBtn" onClick={handleOpenDialogForm}>
            <div className="icon">
              <FaUser />
            </div>
            Minha conta
          </button>
          <button className="reservedProductsBtn" onClick={navigateToReserved}>
            <div className="icon">
              <FaShoppingBasket />
            </div>
            <div className="btnText">Meus produtos</div>
          </button>
          <FormDialog open={openForm} setOpen={setOpenForm}>
            <EditSellerForm />
          </FormDialog>
        </div>

        <ul className="sellerReservedProductsContainer">
          {userOrders.length > 0 &&
            userOrders.map((userOrder, index) => (
              <SellerReservedItem key={index} client={userOrder} type={type} />
            ))}
        </ul>
      </div>
    </>
  );
}

export default ReservedListSeller;
