/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLinks } from "../constants";

// eslint-disable-next-line react/prop-types
const Navigator = ({ active, setActive, navDis, setNavDis }) => {
  
  const navigate = useNavigate();
  const goBack = () => {
    let numberr =
      active.split(" ").length > 1
        ? Number(active.split(" ")[1]) === 1
          ? Number(active.split(" ")[1])
          : Number(active.split(" ")[1]) - 1
        : Number(active[0]) === 1
        ? Number(active)
        : Number(active) - 1;
    setActive("Step " + numberr);

    // if (numberr >= 1 && numberr <= NavLinks.length) {
    //   navigate(NavLinks[numberr - 1].link);
    // }

    numberr >= 1 && numberr <= NavLinks.length
      ? navigate(NavLinks[numberr - 1].link)
      : null;
  };

  const nextStep = () => {
    let numberr =
      active.split(" ").length > 1
        ? Number(active.split(" ")[1]) >= 4
          ? Number(active.split(" ")[1])
          : Number(active.split(" ")[1]) + 1
        : Number(active[0]) >= 4
        ? Number(active)
        : Number(active) + 1;
    setActive("Step " + numberr);

    // if (numberr >= 1 && numberr <= NavLinks.length) {
    //   navigate(NavLinks[numberr - 1].link);
    // }

    numberr >= 1 && numberr <= NavLinks.length
      ? navigate(NavLinks[numberr - 1].link)
      : null;
  };

  const conFirm = () => {
    navigate("/thank-you");
    setNavDis(true);
  };
  useEffect(() => {
    // let goBack = document.querySelectorAll(".navig button")[0];
  }, []);

  return (
    <div
      className={`navig ${
        active === "Step 1" ? "justify-end" : "justify-between"
      } ${navDis ? "hidden" : "flex"}`}
    >
      <button
        onClick={goBack}
        className={active === "Step 1" ? "hidden" : "block"}
      >
        Go Back
      </button>

      <button
        onClick={nextStep}
        className={active === "Step 4" ? "hidden" : "block"}
      >
        Next Step
      </button>
      <button
        onClick={conFirm}
        className={active === "Step 4" ? "block" : "hidden"}
      >
        Confirm
      </button>
    </div>
  );
};

export default Navigator;
