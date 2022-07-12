import Footer from "../Footer"
import Header from "../Header"
import PageTitle from "../PageTitle"

import { useContext, useEffect, useState } from "react"
import { WishlistContext } from "../../Providers/wishlist"
import axios from "axios"
import Product from "../Product"
import { useNavigate } from "react-router-dom";

import { FaUser, FaBox } from "react-icons/fa";
import FormDialog from "../FormDialog";

import EditConsumerForm from "../EditConsumerForm"


function WishList () {

    const navigate = useNavigate();

    const { productsWishlist, setProductsWishList, getWishlist } = useContext(WishlistContext)

    const idUser = localStorage.getItem('id')
    const tokenUser = localStorage.getItem('token')

    
    const [openMenu, setOpenMenu] = useState(false);
    const [openForm, setOpenForm] = useState(false);
  
    const menuList = ["Minha Conta", "Produtos Reservados"];
  
    const handleOpenDialogMenu = () => {
        setOpenMenu(true);
      };
    
      const handleOpenDialogForm = () => {
        setOpenForm(true);
      };



    useEffect(() => {
        axios.get(`https://ecomarketapi.herokuapp.com/users/${idUser}?_embed=wishlist`, {
        headers: {
            Authorization: `Bearer ${tokenUser}`,}
        })
        .then((res) => setProductsWishList(res.data.wishlist))
        .catch((err) => console.log(err))
    })

    return (
        <>
            <Header />
            <PageTitle title={"Lista de desejos"}>
                <div>
                    <button className="menuLowRes">+</button>
                </div>         
            </PageTitle>
            <div className="dashboardMarket">
                <div className="controlBtns">
                    <button className="accountBtn" onClick={handleOpenDialogForm}>
                <div className="icon">
                    <FaUser />
                </div>
                Minha conta
            </button>
            <button className="reservedProductsBtn" onClick={() => navigate("/consumer/reserved")}>
                <div className="icon">
                <FaBox />
                </div>
                <div className="btnText">Produtos reservados</div>
            </button>
            <FormDialog open={openForm} setOpen={setOpenForm}>
                <EditConsumerForm />
            </FormDialog>
            </div>
            </div>
            <ul className="homeProductsList">
                {productsWishlist.map((elem, index) => <Product key={index} product={elem} type='wishlist'/>)}
            </ul>
            <Footer />
        </>
    )
}


export default WishList