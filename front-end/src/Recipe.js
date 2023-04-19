import React from "react"
import { useNavigate } from "react-router"
import "./Recipe.css";
const Recipe = ({recipes}) =>{
    console.log(recipes);
    let navigate = useNavigate();
    return (
        <div>
            {
                recipes && recipes.length ? recipes.map((recipe) => {
                    return (
                        <div className="card" 
                            key={recipe._id}
                            onClick={() => navigate(`/${recipe._id}`)}
                        >
                            <img src={`/static/foodimages/${recipe.Image_Name}.jpg`} alt={recipe.Title} className="recipe-image" />
                            <h3>{recipe.Title}</h3>
                        </div>
                    );
                }) : "Recipe Not Found"
            }
        </div>
    )
}

export default Recipe