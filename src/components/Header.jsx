import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";


export const Header = () => {
  return (
    <div className="header">

      
        <div className="header__sections">
            <div className="section__left">
           <NavLink className="left__title" to="/"> Home </NavLink>
           </div>
           <div className="section__right">
           <NavLink className="right__title" to="/Projects"> Projects </NavLink>
           <Button value="Contact" cssClass="normal__btn" url="/Contact"></Button>
           </div>
      </div>
      </div>
  );
};