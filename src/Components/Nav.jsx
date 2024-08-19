import React from "react";
import img from '../assets/pressure-cooker.png'
const Nav = () => {
  return (
    <div>
      <div className="bg-black text-white p-6 flex items-center gap-4 ">
        
        <img src={img} alt="img" className="w-[35px]" />
        <p className="text-[1.2rem] pt-1">The Cooker</p>
      </div>
    </div>
  );
};

export default Nav;
