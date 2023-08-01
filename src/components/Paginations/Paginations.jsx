import PropTypes from 'prop-types';
import './Paginations.css';

export const Paginations = ({answer}) => {

    return (
        <div className="pagination-container">

            <ul className="pagination">
               
                <li><a onClick={()=>{answer('A')}} href="#">A</a></li>
                <li className="active"><a onClick={()=>{answer('B')}} href="#">B</a></li>
                <li><a href="#">C</a></li>
                <li><a href="#">D</a></li>
                <li><a href="#">E</a></li>
                <li><a href="#">F</a></li>
                <li><a href="#">G</a></li>
                <li><a href="#">H</a></li>
                <li><a href="#">I</a></li>
                <li className="disabled"><span className="hint--bottom hint--always" data-hint="Disabled button when no record to show">J</span></li>
                <li className="disabled"><span>K</span></li>
                <li><a href="#">L</a></li>
                <li><a href="#">M</a></li>
                <li><a href="#">N</a></li>
                <li><a href="#">O</a></li>
                <li><a href="#">P</a></li>
                <li><a href="#">Q</a></li>
                <li><a href="#">R</a></li>
                <li><a href="#">S</a></li>
                <li><a href="#">T</a></li>
                <li><a href="#">U</a></li>
                <li><a href="#">V</a></li>
                <li className="disabled"><a href="#">W</a></li>
                <li className="disabled"><a href="#">X</a></li>
                <li className="disabled"><a href="#">Y</a></li>
                <li><a href="#">Z</a></li>

            </ul>

        </div>
    )
}

Paginations.propTypes = {
    answer:PropTypes.func.isRequired
}