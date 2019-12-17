import React from "react";
import "./styles/card.css";

const Card = props => {
  return (
    <div className="main-card-cont">
      <div className="main-card">
        <img src={props.image} />
        <div className="recipeName">{props.recipeName}</div>
        <div className="recipeDesc">{props.recipeDescription}</div>
        <div className="prepTime">
          <strong>Prep Time: </strong> {props.prepTime}
        </div>
        <div className="cookTime">
          <strong>Cook Time: </strong> {props.cookTime}
        </div>
      </div>
    </div>
  );
};

export default Card;
