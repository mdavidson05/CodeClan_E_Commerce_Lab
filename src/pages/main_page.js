import { useState } from 'react';

import '../App.css';
import UserContext from '../context/UserContext';
import ListContainer from '../Containers/ListContainer';
import BasketContainer from '../Containers/BasketContainer';
import styled from 'styled-components';

const MainPage = () => {

    const [list, setList] = useState(['couch', 'bread', 'cutlery', 'hairdryer']);
    const [newBasketItem, setNewBasketItem] = useState([]) 

    const handleBasketButton = (event) => {
        const copyBasket = [... newBasketItem]
        const newItem = event.target.value
        copyBasket.push(newItem)

        setNewBasketItem(copyBasket)

    }

    const deleteFromBasket = (event) => {
        const copyBasket = [... newBasketItem]
        const deletedItem = event.target.value
        copyBasket.splice(deletedItem, 1)
        setNewBasketItem(copyBasket)
    }

    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    // }

    const ItemList = styled.div `
    float: left;
    `
    const Basket = styled.div `
    float: right;
    `
   
    return (
        <>

            <UserContext.Provider value={{list, newBasketItem, handleBasketButton, deleteFromBasket}}>
                <ItemList>
                <ListContainer />
                </ItemList>
                <Basket>
                <BasketContainer />
                </Basket>
            </UserContext.Provider>
        </>
    )
}

export default MainPage;
