 import {dataDrink} from '../assets/dataDrink';

export const getDrinkByName = async (  name  ) =>{

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    const resp = await fetch (url);
    const { drinks } = await resp.json();

    const data = {

        name: drinks[0].strDrink,
        image: drinks[0].strDrinkThumb,
        id: drinks[0].idDrink,
        category: drinks[0].strCategory,
        instructions: drinks[0].strInstructions,
        ingredient1: drinks[0].strIngredient1,
        ingredient2: drinks[0].strIngredient2,
        ingredient3: drinks[0].strIngredient3,
        ingredient4: drinks[0].strIngredient4,
        ingredient5: drinks[0].strIngredient5,
        ingredient6: drinks[0].strIngredient6,
        ingredient7: drinks[0].strIngredient7,
        ingredient8: drinks[0].strIngredient8,
        ingredient9: drinks[0].strIngredient9            

    };

    // const data = {

    //     name: dataDrink[0].strDrink,
    //     image: dataDrink[0].strDrinkThumb,
    //     id: dataDrink[0].idDrink,
    //     category: dataDrink[0].strCategory,
    //     instructions: dataDrink[0].strInstructions,
    //     ingredient1: dataDrink[0].strIngredient1,
    //     ingredient2: dataDrink[0].strIngredient2,
    //     ingredient3: dataDrink[0].strIngredient3,
    //     ingredient4: dataDrink[0].strIngredient4,
    //     ingredient5: dataDrink[0].strIngredient5,
    //     ingredient6: dataDrink[0].strIngredient6,
    //     ingredient7: dataDrink[0].strIngredient7,
    //     ingredient8: dataDrink[0].strIngredient8,
    //     ingredient9: dataDrink[0].strIngredient9     
    // };

     return data;
}

