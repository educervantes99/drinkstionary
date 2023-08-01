import { useState } from 'react';
import { useFetchDrinks } from './hooks/useFetchDrinks';
import { DrinksGrids, Paginations, CategoryGrid } from './components';
import { champagne, wine } from './assets';

function DrinksApp() {

  const [letter, setLetter] = useState('a');
  const { drinks, isLoading } = useFetchDrinks(letter);
  const res = (a) => { setLetter(a) };

  return (
    <>
      <h1>
        <img className='headerImage' src={champagne} alt="champagne" />
        Drinkstionary
        <img className='headerImage' src={wine} alt="wine" />
      </h1>

      <h4>&quot;The one-stop to find amazing drink mixes for any occassion.&quot;</h4>
      <CategoryGrid />
      <Paginations answer={res} />
      <DrinksGrids data={drinks} isLoading={isLoading} />

    </>
  )
}

export default DrinksApp;
