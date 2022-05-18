import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const ListItem = ({value, handleButtonClick}) => {
    

    return (
        <>
        <p>{value}</p>

        <button id='add' value = {value} onClick = {handleButtonClick}> Click to Add to Basket </button>
        </>
    )
}

export default ListItem