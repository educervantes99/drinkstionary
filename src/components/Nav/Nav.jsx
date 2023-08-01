import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { wine } from '../../assets';
import './Nav.css';

export const Nav = () => {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setInputValue('');
        navigate(`/drink/${inputValue.trim()}`);
    }

    return (
            <div className="nav">
                <div>
                    <Link className="active" to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <form onSubmit={onSubmit} aria-label="form">
                        <input
                            type="text"
                            placeholder="Drink Name"
                            value={inputValue}
                            onChange={onInputChange} />
                    </form>
                </div>
            </div>
    )
}