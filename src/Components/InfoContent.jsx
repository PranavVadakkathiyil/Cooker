import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const InfoContent = () => {
  const [item, setitem] = useState();
  const { MealId } = useParams(null);
  console.log(item);
  useEffect(() => {
    axios
      .post(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}
    `
      )
      .then((res) => {
        console.log(res.data.meals);
        setitem(res.data.meals[0]);
      });
  }, [0]);

  return (
    <div className="bg-black">
      
      {!item ? (
        "Loading"
      ) : (
        <>
          <div className=" text-center bg-black text-white">
            <img
              src={item.strMealThumb}
              alt="img"
              className="h-[17rem] mx-auto rounded-xl"
            />
            <p className="text-[1.2rem] py-4">{item.strMeal}</p>
          </div>
          <div className="bg-black text-white flex justify-around">
            <p className="text-gray-500">Origin : {item.strArea}</p>
            <p className="text-gray-500">Category: {item.strCategory}</p>
          </div>
          <div className="bg-black text-white px-5 py-5 ">
            <p className="text-[1.2rem] text-center ">Ingredients</p>
            <p className="mt-5">{item.strIngredient1} {item.strMeasure1}</p>
            <p>{item.strIngredient2} {item.strMeasure2}</p>
            <p>{item.strIngredient3} {item.strMeasure3}</p>
            <p>{item.strIngredient4} {item.strMeasure4}</p>
            <p>{item.strIngredient5} {item.strMeasure5}</p>
            <p>{item.strIngredient6} {item.strMeasure6}</p>
            <p>{item.strIngredient7} {item.strMeasure7}</p>
            <p>{item.strIngredient8} {item.strMeasure8}</p>
            <p>{item.strIngredient9} {item.strMeasure9}</p>
            <p>{item.strIngredient10} {item.strMeasure10}</p>
            <p>{item.strIngredient11} {item.strMeasure11}</p>
            <p>{item.strIngredient12} {item.strMeasure12}</p>
            <p>{item.strIngredient13} {item.strMeasure13}</p>
            
          </div>
          <div className="bg-black text-white"><p className="text-[1.2rem] text-center mb-4">Prepration</p>
          <p className="px-4 text-[1.2rem]">{item.strInstructions}</p>
          </div>
          
        </>
      )}
    </div>
  );
};

export default InfoContent;
