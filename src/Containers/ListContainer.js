import React,{useContext, useState} from 'react';
import ListItem from '../Components/ListItem'
import UserContext from '../context/UserContext';

const ListContainer = () => {

    const{list, handleBasketButton} = useContext(UserContext)
    // const [listItem, setListItem] = useState(list);

    const listItemNodes =  list.map ((item, index) => {
        return (
            <ListItem key = {index}  item ={item} handleButtonClick = {handleBasketButton} />
        )
    })

        return (  
        <>
        {listItemNodes}
    </>
 )  
}
export default ListContainer