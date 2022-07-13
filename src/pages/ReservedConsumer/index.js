import "./style.css";

import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DialogMenu from "../../components/DialogMenu";
import FormDialog from "../../components/FormDialog";
import ReservedProdsConsumer from "../../components/ReservedProdsConsumer";
import EditConsumerForm from "../../components/EditConsumerForm";

import { FaUser, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReservedConsumer() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const menuList = ["Minha Conta", "Wishlist"];

  const handleOpenDialogMenu = () => {
    setOpenMenu(true);
  };

<<<<<<< HEAD
                    <DialogMenu
                        open={openMenu}
                        setOpen={setOpenMenu}
                        menuList={menuList}
                    />
                </div>
            </PageTitle>
            <div className="controlBtns">
                <button className="accountBtn" onClick={handleOpenDialogForm}>
                    <div className="icon">
                        <FaUser />
                    </div>
                    Minha conta
                </button>
                <button className="wishlistProductsBtn" onClick={() => navigate("/wishlist")}>
                    <div className="icon">
                        <FaHeart />
                    </div>
                    <div className="btnText">Wishlist</div>
                </button>
                <FormDialog open={openForm} setOpen={setOpenForm}>
                    <EditConsumerForm />
                </FormDialog>
            </div>
=======
  const handleOpenDialogForm = () => {
    setOpenForm(true);
  };
>>>>>>> 4475c78d17731f6183649aef031676b8e88f8193

  return (
    <>
      <Header />
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
      </PageTitle>
      <div className="controlBtns">
        <button className="accountBtn" onClick={handleOpenDialogForm}>
          <div className="icon">
            <FaUser />
          </div>
          Minha conta
        </button>
        <button
          className="wishlistProductsBtn"
          onClick={() => navigate("/wishlist")}
        >
          <div className="icon">
            <FaHeart />
          </div>
          <div className="btnText">Wishlist</div>
        </button>
        <FormDialog open={openForm} setOpen={setOpenForm}>
          <EditConsumerForm />
        </FormDialog>
      </div>

      <ReservedProdsConsumer type="reservedConsumer" />
      <Footer />
    </>
  );
}

export default ReservedConsumer;
