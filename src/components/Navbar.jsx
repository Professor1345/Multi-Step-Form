// import React from 'react'

import { NavLink } from "react-router-dom";
import { NavLinks } from "../constants";
// import { useEffect } from "react";
// import { useState } from "react";
// import { bgSideDesktop, bgSideMobile } from "../assets/images";

// eslint-disable-next-line react/prop-types
const Navbar = ({ active, setActive, setNavDis }) => {
  
  return (
    <div className={`nav-container`}>
      {NavLinks.map((navlink) => {
        return (
          <NavLink
            key={navlink.id}
            to={navlink.link}
            onClick={() => {
              setActive(navlink.step);
              setNavDis(false);
            }}
            className="nav"
          >
            <div
              className={`nav-id ${active === navlink.step ? "activeId" : ""} `}
            >
              <span>{navlink.id}</span>
            </div>
            <div className="hidden sm:block mx-2 sm:mx-3 md:mx-4">
              <div className="text-[hsl(231,11%,63%)] text-sm sm:text-xs md:text-sm">
                {navlink.step.toUpperCase()}
              </div>
              <div className="text-[hsl(0,_0%,_100%)] text-[15px] sm:text-sm md:text-[15px]">
                {navlink.title.toUpperCase()}
              </div>
              {/* <img src={bgSideDesktop} alt="" /> */}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
