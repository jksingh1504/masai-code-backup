import { useSelector } from "react-redux";
import { RecipeCard } from "./RecipeCard";
export const RecipeList = () => {
  const { recipe } = useSelector((store) => store.recipeReducer);
  return (
    <div>
      <div className="recipe-list" data-testid="recipe-list">
        {/* Map through the recipe using the recipe card here */}
        {recipe.map((ele) => (
          <RecipeCard key={ele.id} recipeDetails={ele} />
        ))}
      </div>
    </div>
  );
};
