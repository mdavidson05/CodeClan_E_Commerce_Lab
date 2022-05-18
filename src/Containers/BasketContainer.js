import React,{useContext, useState} from 'react';
import UserContext from '../context/UserContext';
import BasketItem  from '../Components/BasketItem'

const BasketContainer = () => {

    const{newBasketItem, deleteFromBasket} = useContext(UserContext)

    const basketItemNodes = newBasketItem.map((item, index) => {
        return (
        <BasketItem key={index} namevalue={item.name} pricevalue={item.price} deleteFromBasket = {deleteFromBasket}/>
        )
    })

        return (  
        <>
        {basketItemNodes}
    </>
 )  
}
export default BasketContainer