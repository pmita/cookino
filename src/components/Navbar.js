import { useTheme } from '../hooks/useTheme';
//ROUTER
import { Link } from 'react-router-dom';
//COMPONENT
import Searchbar from './Searchbar';
import './Navbar.css';

const Navbar = () => {
    //STATE & VARIABLES
    const { color, changeColor } = useTheme();
    return(
        <div className='navbar' style={{ background: color }}>
            <nav onClick={() => changeColor('pink')}>
                <Link to='/' className='brand'>
                    <h1>Cooking with Passion</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>
                    + Create
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;