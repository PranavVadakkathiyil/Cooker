import React, { useEffect, useState } from "react";
import HomeList from "../Components/HomeList";
import axios from "axios";
import IndexFind from "../Components/IndexFind";
const Home = () => {
  const [url, seturl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=c"
  );
  const [item, setitem] = useState();
  const [show, setshow] = useState();
  const [search, setsearch] = useState("");
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.meals);
      setitem(res.data.meals);
      setshow(true);
    });
  }, [url]);
  //const IndexList = (indexVal) => {
  //  seturl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${indexVal}`);
  //};
  const SearchItem = () => {
    seturl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}
`)
document.getElementById("Search").value = "";
;
  };
  return (
    <div className="bg-black">
      <div className="h-[3rem] mx-3 my-3 sm:text-center ">
        <input
          onChange={(e) => setsearch(e.target.value)}
          type="search"
          name=""
          id="Search"
          className="border h-full sm:w-[40%] w-[75%] px-4 rounded-md outline-none text-black"
          placeholder="Search recipes"
        />
        <button className="bg-gray-600 h-full sm:w-[10%] w-[25%] rounded " onClick={SearchItem}>
          Search
        </button>
      </div>
      <div>{show ? <HomeList data={item} /> : "Loading"}</div>
      {/*<div>
        {show ? (
          <IndexFind ItemIndex={(indexVal) => IndexList(indexVal)} />
        ) : (
          ""
        )}
      </div>*/}
    </div>
  );
};

export default Home;
