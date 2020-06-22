import React from "react";
import "./SingleCategory.css";
import { Button } from "../Button/Button.jsx";
import { Subcategory } from "../AllCategories/Subcategory/Subcategory.jsx";

export const SingleCategory = (props) => {
  console.log(props);
  const thisCatIndex = props.categories.findIndex((cat) => {
    return cat.id === props.match.params.id;
  });
  const category = props.categories[thisCatIndex];

  return thisCatIndex > -1 ? (
    <div class="single-category">
      <div key={category.id} className="category">
        <h3>{category.name}</h3>
        <ul>
          {category.subcategories.map((subcategory) => (
            <Subcategory key={subcategory.id} name={subcategory.name} />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div>
      Nav atrasta kategorija ar nosaukumu{" "}
      <span className="eventify-yellow">{props.search}</span>
    </div>
  );
};

export default SingleCategory;

// const category = props.match.params.id;
// const categories = props.categories;

// return (
//   <div>
//     <div key={category.id} className="category">
//       <h3>{category.name}</h3>
//       <ul>
//         {category.subcategories.map((subcategory) => (
//           <Subcategory key={subcategory.id} name={subcategory.name} />
//         ))}
//       </ul>
//     </div>
//   </div>
