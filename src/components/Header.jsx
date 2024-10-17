import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-green-700 h-[90px] p-4 flex justify-between items-center top-0 sticky z-50">
      <div className="heading flex justify-center items-center ml-5 font-serif text-white font-bold text-[40px]">
        CARBONChecker
      </div>
      <div className="flex justify-center items-center mr-5 gap-10 font-serif text-[30px] text-white">
        <Link to="/">Home</Link>
        <Link to="/electricity">Electricity </Link>
        <Link to="/solar">Solar </Link>
        <Link to="/water">Water </Link>
      </div>
    </div>
  );
};

export default Header;
