import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import ListItem from "./ListItem";

const BasketItem = ({key, namevalue, pricevalue, deleteFromBasket}) => {
    
    
    return (
        <>
        
        <p>{namevalue}</p>
        
        <p>{pricevalue}</p>

        <button id={namevalue} index={key} value = {pricevalue} onClick= {deleteFromBasket} > Click to Delete from Basket </button>
        </>
    )
}

export default BasketItem