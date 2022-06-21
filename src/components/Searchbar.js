import { useState } from 'react';
import './Searchbar.css';
//ROUTER
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
    //STATE & VARIABLES
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault();

        //Redirect the user on the Search page
        navigate(`/search?query=${term}`)
    }
    return(
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search:</label>
                <input
                    type='text'
                    id='search'
                    onChange={(e) => setTerm(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Searchbar;