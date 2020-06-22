import React from "react";
import "./AllCategories.css";
import { Subcategory } from "./Subcategory/Subcategory";
import { Button } from "../Button/Button";
import { SingleCategory } from "../SingleCategory/SingleCategory";
import { Link } from "react-router-dom";

export const AllCategories = (props) =>
  props.match.params.id ? (
    <SingleCategory categories={props.categories} id={props.match.params.id} />
  ) : props.categories.length < 1 ? (
    <div>
      <p>
        Nav nevienas kategorijas ar nosaukumu{" "}
        <span className="eventify-yellow">{props.searchValue}</span>
      </p>
      <Button title="Pievieno kategoriju" />
    </div>
  ) : (
    <div className="all-categories">
      {console.log(props.categories)}
      <div className="categories">
        {props.categories.map((category) => (
          <Link className="category" to={category.id}>
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {category.subcategories.map((subcategory) => (
                  <Subcategory key={subcategory.id} name={subcategory.name} />
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
      <Button title="+ Pievieno kategoriju" />
    </div>
  );
