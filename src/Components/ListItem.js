import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const ListItem = ({key, valuename, valueprice, handleButtonClick}) => {
    

    return (
        <>
        <p>{valuename}</p>
        <p>{valueprice}</p>

        <button id={valuename} index={key} value = {valueprice} priceValue={valueprice} onClick = {handleButtonClick}> Click to Add to Basket </button>
        </>
    )
}

export default ListItem