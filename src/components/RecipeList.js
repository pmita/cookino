import './RecipeList.css';
//ROUTER
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {

    //Conditionally render different template
    if(recipes.length === 0){
        return <div className='error'>No recipes to load...</div>
    }

    return(
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='card'>
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