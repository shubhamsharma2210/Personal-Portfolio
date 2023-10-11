import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [togleitem, setTogleitem] = useState(false);

  const handleTogleItem = () => {
    setTogleitem(!togleitem);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${togleitem ? "active" : " "}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link className="navbar_container_menu_item_links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar_icon" onClick={handleTogleItem}>
          {togleitem ? (
            <HiX size={30} color="red" />
          ) : (
            <FaBars color="red" size={30} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
