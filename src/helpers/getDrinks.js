import {dataD} from '../assets/data';


export const getDrinks = async (  letter  ) =>{
    
    // const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    const url = ``;
    const resp = await fetch (url);
    // const { drinks } = await resp.json();

    // const data = drinks.map( drink =>({
    const data = dataD.map( drink =>({

        name: drink.strDrink,
        image: drink.strDrinkThumb,
        id: drink.idDrink,
        category: drink.strCategory,
        type: drink.strAlcoholic,
        glass: drink.strGlass

    }));

    return data;
}

