/* eslint-disable no-undef */
// import React from 'react'

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

// eslint-disable-next-line react/prop-types
const ThankYou = () => {
  // eslint-disable-next-line react/prop-types
  const { setActive, setNavDis } = useContext(UserContext);
  // const  = useContext(UserContext);

  const navigate = useNavigate();
  const goHome = () => {
    // localStorage.setItem("active", "Step 1");
    navigate("/");
    setActive("Step 1");
    setNavDis(true);
  };
  return (
    <div>
      <h3>Thank You</h3>
      <p>
        <NavLink onClick={goHome} className="underline text-gray-500">
          Go Home
        </NavLink>
      </p>
    </div>
  );
};

export default ThankYou;
