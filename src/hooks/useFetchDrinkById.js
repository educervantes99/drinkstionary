import { useEffect, useState } from "react";
import { getDrinkById } from "../helpers/getDrinkById";
import { getDrinkByName } from "../helpers/getDrinkByName";

export const useFetchDrinkById = (id) => {

    const [drink, setDrink] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const newDrink = ( id.length===5 ) ? await getDrinkById( id ) : await getDrinkByName( id );
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