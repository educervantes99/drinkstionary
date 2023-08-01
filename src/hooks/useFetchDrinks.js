import { useEffect, useState } from "react";
import { getDrinks } from "../helpers/getDrinks";

export const useFetchDrinks = (letter) => {
   
    const [drinks, setDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);    
    
    const getData = async() => {
        const newDrinks = await getDrinks( letter );
        setDrinks(newDrinks);
        setIsLoading(false);
    }
    
    useEffect(() => {      
        getData();
    }, [letter]);  

    return {
        drinks,
        isLoading
    }
}