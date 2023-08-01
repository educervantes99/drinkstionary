// import {dataD} from '../assets/data';

export const getDrinksByCategory = async (  category  ) =>{

    console.log('cat', category)
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    // const url = ``;
    const resp = await fetch (url);
    const { drinks } = await resp.json();

    const data = drinks.map( drink =>({
    // const data = dataD.map( drink =>({

        name: drink.strDrink,
        image: drink.strDrinkThumb,
        id: drink.idDrink,
        category: drink.strCategory,
        type: drink.strAlcoholic,
        glass: drink.strGlass

    }));

    // console.log('asd',drinks);
    return data;
}

