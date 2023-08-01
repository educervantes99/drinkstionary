import { useParams } from 'react-router-dom';
import { useFetchDrinkById } from '../../hooks/useFetchDrinkById';
import { IngredientItem } from '../../components';
import './Drink.css';

export const Drink = () => {

  const { id } = useParams();
  const { drink, isLoading } = useFetchDrinkById(id);

  return (
    <div>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <h1>{drink.name}</h1>
      <div className='drink-container'>
        <div className='drink-column'>
          <img className='drink-image' src={drink.image} alt={drink.name} />
        </div>
        <div className='drink-column'>
          <div className='drink-data'>

            <h3>Category: </h3><p>{drink.category}</p>
            <h3>Instructions: </h3><p>{drink.instructions}</p>
            <h3>Ingredients:</h3>
            <div className='ingredients-container'>

              {drink?.ingredients?.filter(i => i !== null).map(ingredient => {

                return (<IngredientItem key={ingredient} ingredient={ingredient} />)

              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
