import './RecipeList.css';
//ROUTER
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const RecipeList = ({ recipes }) => {
    //STATE & VARIABLES
    const { mode } = useTheme();

    //Conditionally render different template
    if(recipes.length === 0){
        return <div className='error'>No recipes to load...</div>
    }

    return(
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;