import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CategoryItem.css';

export const CategoryItem = ({name, image}) => {

  return (
    <div className='category-item'>
      <Link className='category-item__link'to={`/category/${name}`}>
        <img className='category-item__logo' src={image} alt={name} />
        <h4 className='category-item__title'>{name}</h4>
      </Link>
    </div>
  )
}

CategoryItem.propTypes = {
    name:PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}  