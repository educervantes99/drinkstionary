import { useEffect, useState } from "react";
import { getDrinkByName } from "../helpers/getDrinkByName";

export const useFetchDrinkByName = (name) => {

    const [drink, setDrink] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const newDrink = await getDrinkByName( name );
        setDrink(newDrink);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);  

    return {
        drink,
        isLoading
    }
}