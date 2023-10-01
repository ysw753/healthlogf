import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gray-100 flex justify-between   p-3">
      <Link className="text-3xl" to="/">
        HEALTH LOG
      </Link>
      <nav className="flex gap-4 items-center">
        <p>user</p>
        <p>login</p>
        <p>logout</p>
      </nav>
    </header>
  );
};

export default Header;
