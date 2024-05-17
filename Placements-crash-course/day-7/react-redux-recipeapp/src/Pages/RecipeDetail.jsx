import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RecipeDetail = () => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { id } = useParams();
  const { name, price, category, type, image, ingredients } = recipeDetails;
  useEffect(() => {
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/recipe/${id}`
      )
      .then((res) => {
        setRecipeDetails(res.data);
      });
  }, []);

  return (
    <div className="recipe-card">
      {/* **Display the id of the item in h1 tag with class `recipe-id`** */}
      {/* Display all recipe details here */}
      <h1 className="recipe-id">{id}</h1>
      <img src={image} className="recipe-image" />
      <b className="recipe-name">{name}</b>
      <p className="recipe-type">Type: {type}</p>
      <b className="recipe-category">Category: {category}</b>
      <br /> <br />
      <b className="recipe-price">Price: {price}$</b>
      <br /> <br />
      <b>Ingredients:-</b>
      {ingredients
        ? ingredients.map((ele, i) => (
            <p key={i} className="recipe-ingredient">
              -{ele}-
            </p>
          ))
        : null}
    </div>
  );
};
