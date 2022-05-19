import { useState } from 'react';

import '../App.css';
import UserContext from '../context/UserContext';
import ListContainer from '../Containers/ListContainer';
import BasketContainer from '../Containers/BasketContainer';
import styled from 'styled-components';

const MainPage = () => {

    const [list, setList] = useState([{name: 'couch', price: 100}, {name:'bread', price:5}, {name:'cutlery', price:10}, {name:'hairdryer', price:20}]);

    const [basket, setBasket] = useState([]) 

    const handleBasketButton = (item) => {
        const copyBasket = [... basket, item]
        // debugger;
        // copyBasket.push(item)
        setBasket(copyBasket)

    }

    const deleteFromBasket = (itemToDelete) => {
        const newBasket  = basket.filter((item) => item.name !== itemToDelete.name )    
        setBasket(newBasket)
        }
        
        // copyBasket.splice(copyBasket, 1)
        // setNewBasketItem(NewBasket)
        
        
    

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

            <UserContext.Provider value={{list, basket, handleBasketButton, deleteFromBasket}}>
                <ItemList >
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
