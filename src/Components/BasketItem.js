import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const BasketItem = ({value, deleteFromBasket}) => {
    
    
    return (
        <>
        <p>{value}</p>

        <button id='delete' value = {value} onClick= {deleteFromBasket} > Click to Delete from Basket </button>
        </>
    )
}

export default BasketItem