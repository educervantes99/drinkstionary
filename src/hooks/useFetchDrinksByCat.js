import { useEffect, useState } from "react";
import { getDrinksByCategory } from "../helpers/getDrinksByCategory";

export const useFetchDrinksByCategory = (category) => {

    const [drinks, setDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const newDrinks = await getDrinksByCategory( category );
        setDrinks(newDrinks);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);  

    return {
        drinks,
        isLoading
    }
}