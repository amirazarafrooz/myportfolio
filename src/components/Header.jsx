import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
      </div>
      <div className="header__list">
        <ul className="list__items">
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="items__title" to="/games">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="items__title" to="/contact-us">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
