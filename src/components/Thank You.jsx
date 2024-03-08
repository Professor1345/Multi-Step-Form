/* eslint-disable no-undef */
// import React from 'react'

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { thankYou } from "../assets/images";

// eslint-disable-next-line react/prop-types
const ThankYou = () => {
  // eslint-disable-next-line react/prop-types
  const {
    setActive,
    setNavDis,
    setValidate,
    setValName,
    setValEmail,
    setValNumber,
  } = useContext(UserContext);
  // const  = useContext(UserContext);

  const navigate = useNavigate();
  const goHome = () => {
    // localStorage.setItem("active", "Step 1");
    navigate("/");
    setActive("Step 1");
    setNavDis(true);
    setValidate(false);
    setValName();
    setValEmail();
    setValNumber();
  };
  return (
    <div className="text-[hsl(231,11%,63%)] flex flex-col items-center justify-center self-center m-auto">
      <img src={thankYou} alt="thank you" className="size-[15%] my-4" />
      <h3 className="thank-header">Thank you!</h3>
      <p className="text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <NavLink onClick={goHome} className="underline text-gray-500">
        Go Home
      </NavLink>
    </div>
  );
};

export default ThankYou;
