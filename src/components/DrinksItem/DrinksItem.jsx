import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { beer, menu, icetea } from '../../assets';
import './DrinksItem.css';

export const DrinksItem = ({ title, url, id, type, category, glass }) => {
  return (

      <Link className="card" to={`/drink/${id}`}>
        <h4 className='card__title'>&quot;{title}&quot;</h4>
        <img className='card__image' src={url} alt={title} />
        <div className='card__subcontainer'>
          <span>
            <img className='card__icon' src={beer} alt="Category" /> {category}
          </span>
          <span>
            <img className='card__icon' src={menu} alt="Type" /> {type}
          </span>
          <span>
            <img className='card__icon' src={icetea} alt="Glass" /> {glass}
          </span>
        </div>
      </Link>

  )
}

DrinksItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  glass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string
}  