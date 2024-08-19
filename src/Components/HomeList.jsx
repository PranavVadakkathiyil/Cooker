import React from "react";
import { useNavigate } from "react-router-dom";
const HomeList = ({ data }) => {
  console.log(data);
  let navigate=useNavigate();
  return (
    <>
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-3 mx-3 mt-5">
        {!data
          ? "Loading"
          : data.map((item) => (
              <div key={item.idMeal} className="sm:col-span-1 border border-gray-800 bg-black text-white" onClick={()=>{navigate(`${item.idMeal}`)}}>
                <img src={item.strMealThumb} alt="hi" className="rounded" />
                <p className="text-center text-[1.2rem]">
                  {item.strMeal}
                </p>
              </div>
            ))}
      </div>
    </>
  );
};

export default HomeList;
