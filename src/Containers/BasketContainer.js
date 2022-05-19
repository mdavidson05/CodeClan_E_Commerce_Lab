import React,{useContext, useState} from 'react';
import UserContext from '../context/UserContext';
import BasketItem  from '../Components/BasketItem'

const BasketContainer = () => {

    const{basket, deleteFromBasket} = useContext(UserContext)

    const basketItemNodes = basket.map((item, index) => {
        return (
        <BasketItem key={index} item={item}  deleteFromBasket={deleteFromBasket}/>
        
        )
    })

        return (  
        <>
        {basketItemNodes}
    </>
 )  
}
export default BasketContainer