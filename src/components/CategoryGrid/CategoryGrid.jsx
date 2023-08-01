import { CategoryItem } from '../../components';
import {cocktail, shot, coffee, other} from '../../assets';
import './CategoryGrid.css';

export const CategoryGrid = () => {
    return (
        <>
            <h3>Category</h3>
            <div className="category-grid">
                <CategoryItem image={cocktail} name="Cocktail" />
                <CategoryItem image={shot} name="Shot" />
                <CategoryItem image={coffee} name="Coffee-Tea" />
                <CategoryItem image={other} name="Other" />
            </div>
        </>
    )
}
