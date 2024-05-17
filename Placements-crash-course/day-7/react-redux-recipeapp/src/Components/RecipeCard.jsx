import { Link } from "react-router-dom";

export const RecipeCard = ({ recipeDetails }) => {
  const { id, name, type, category, price, image } = recipeDetails;
  return (
    <div className="recipe-card">
      {/* Dispaly Recipe Details Here */}
      <img className="recipe-image" src={image} alt="" />
      <b className="recipe-name">{name}</b>
      <br />
      <br />
      <b
        style={{ color: type === "veg" ? "green" : "red" }}
        className="recipe-type"
      >
        Type: {type}
      </b>
      <p className="recipe-category">Category: {category}</p>

      <p className="recipe-price">{price}</p>
      <button className="recipe-detail">
        <Link to={`/recipe/${id}`}>View Ingredients</Link>
      </button>
    </div>
  );
};
