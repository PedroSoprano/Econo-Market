import { useContext, useEffect } from "react";
import axios from "axios"

import "./style.css"

// import { ProductsContext } from "../../Providers/ProductsContext"
// import { UserContext } from "../../Providers/UserContext"

import Product from "../Product";

import "./style.css"


function ProductList({type}){


    // const {productList, setProductList, filteredProducts} = useContext(ProductsContext)
    // const {user} = useContext(UserContext)


    // useEffect(() => {
    //     axios.get("https://ecomarketapi.herokuapp.com/products")
    //         .then((res) => {
    //             setProductList(res.data)
    //         })
    //         .catch((err) => console.log(err))
    // },[])


    return(
        <section className="homeConteinerProductsList">
            <ul className="homeProductsList">
                {/* {filteredProducts.length > 0? (

                    filteredProducts.map((product) => (
                        <li key={product.id}>{product.name}</li>
                        //apagar linha de cima e descomentar a linha de baixo quando já tiver o componente Product criado
                        // <Product key={product.id} type={type}/>
                    ))
                ) : (
                    productList.map((product) => (
                        <li key={product.id}>{product.name}</li>
                        //apagar linha de cima e descomentar a linha de baixo quando já tiver o componente Product criado
                        // <Product key={product.id} type={type}/>
                    ))
                )} */}
            </ul>
        </section>
    )
}

export default ProductList