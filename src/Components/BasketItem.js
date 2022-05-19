import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import ListItem from "./ListItem";

const BasketItem = ({ item, deleteFromBasket}) => {
    
    
    return (
        <>
        
        <p>{item.name}</p>
        
        <p>{item.price}</p>

        <button onClick= {() => deleteFromBasket(item)} > Click to Delete from Basket </button>
        </>
    )
}

export default BasketItem