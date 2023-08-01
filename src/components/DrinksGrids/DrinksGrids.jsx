import PropTypes from "prop-types";
import { DrinksItem } from "../DrinksItem/DrinksItem";
import './DrinksGrids.css';

export const DrinksGrids = ({ data, isLoading }) => {

  return (
    <>
      {isLoading && (<h2>Cargando...</h2>)}

      <div className="card-grid">

        {data.map(({ id, name, image, type, glass, category }) => {
          return (
            <DrinksItem
              key={id}
              title={name}
              url={image}
              id={id}
              category={category}
              glass={glass}
              type={type}
            />
          )
        })}

      </div>
    </>
  )
}

DrinksGrids.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

