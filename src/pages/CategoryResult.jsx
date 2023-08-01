import { DrinksGrids } from '../components';
import { useParams } from 'react-router-dom';
import { useFetchDrinksByCategory} from '../hooks/useFetchDrinksByCat';


export const CategoryResult = () => {

  const { name } = useParams();  
  const { drinks, isLoading } = useFetchDrinksByCategory(name);
  return (
    <div>
        <h1>{name}</h1>
        <DrinksGrids data={drinks} isLoading={isLoading}/>
    </div>
  )
}
