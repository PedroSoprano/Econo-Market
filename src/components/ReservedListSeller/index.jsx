import "./style.css";

import { ProductContext } from "../../Providers/products";

import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { FaUser, FaShoppingBasket } from "react-icons/fa";

import PageTitle from "../PageTitle";
import DialogMenu from "../DialogMenu";
import FormDialog from "../FormDialog";
import ProductForm from "../ProductForm";
import EditSellerForm from "../EditSellerForm";

function ReservedListSeller() {
  const { productList } = useContext(ProductContext);

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
      <PageTitle title={"Produtos Cadastrados"}>
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
          {productList.length > 0 && productList.map}
        </ul>
      </div>
    </>
  );
}

export default ReservedListSeller;
