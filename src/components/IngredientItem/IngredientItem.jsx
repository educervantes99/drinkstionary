import PropTypes from 'prop-types';

export const IngredientItem = ({ ingredient }) => {
    return (
        <div>
            <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`} alt={ingredient} />
            <h5>{ingredient}</h5>
        </div>
    )
}

IngredientItem.propTypes = {
    ingredient: PropTypes.string.isRequired
}