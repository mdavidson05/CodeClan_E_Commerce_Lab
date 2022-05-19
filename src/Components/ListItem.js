import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const ListItem = ({item, handleButtonClick}) => {

    const handleButtonClickLocal = () =>{
        handleButtonClick(item)
    }
    

    return (
        <>
        <p>{item.name}</p>
        <p>{item.price}</p>

        <button onClick = {handleButtonClickLocal}> Click to Add to Basket </button>
        </>
    )
}

export default ListItem