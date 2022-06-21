import './Home.css';
//HOOKS
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
    //STATE &&VARIABLES
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
    return(
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && data.map(recipe => (
                <h2 key={recipe.id}>{recipe.title}</h2>
            ))}
        </div>
    );
}

export default Home;