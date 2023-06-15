import React from 'react';
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tab, Tabs, useMediaQuery} from "@mui/material";
import Item from "../../components/Item";
import { setItems } from '../state';

const ShoppingList = () => {
    const dispatch = useDispatch(); 
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.item);
    const isNonMobile =useMediaQuery("(min-width:600px");
    console.log("items", items);
    
    const handleChange = (event, newvalue) =>{
        setValue(newvalue);
    };

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            {method: "GET"}
        );
        const itemsJson =await items.json();
        dispatch(setItems(items.json.data));
    }

    useEffect(() => {
        getItems(); 
    }, [])

  return (
    <div>ShoppingList</div>
  )
};

export default ShoppingList