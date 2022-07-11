import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../Header";
import PageTitle from "../PageTitle";
import DialogMenu from "../DialogMenu";
import FormDialog from "../FormDialog";
import ProductForm from "../ProductForm";
import Footer from "../Footer";

function ReservedListSeller() {
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
    navigate("/seller/reserved");
  };

  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
}

export default ReservedListSeller;
