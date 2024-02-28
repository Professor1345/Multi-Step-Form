/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import React from 'react'

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLinks } from "../constants";
import UserContext from "../UserContext";

// eslint-disable-next-line react/prop-types
const Navigator = () => {
  const {
    active,
    setActive,
    validate,
    setValidate,

    // setShowValidate,
    navDis,
    setNavDis,

    valName,
    setValName,
    valEmail,
    setValEmail,
    valNumber,
    setValNumber,
    emailError,
    setEmailError,
  } = useContext(UserContext);

  const navigate = useNavigate();
  const goBack = () => {
    setValName(true);
    setValEmail(true);
    setValNumber(true);
    emailError.trim() == ""
        ? setEmailError("This field is required")
        : emailError;
    setValidate(false);
    
    let numberr =
      active.split(" ").length > 1
        ? Number(active.split(" ")[1]) === 1
          ? Number(active.split(" ")[1])
          : Number(active.split(" ")[1]) - 1
        : Number(active[0]) <= 1
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
    setValidate(false);
    let numberr =
      // active.split(" ").length > 1
      // ?
      Number(active.split(" ")[1]) >= 4
        ? Number(active.split(" ")[1])
        : Number(active.split(" ")[1]) + 1;
    // : (Number(active[0]) >= 4
    //     ? Number(active)
    //     : Number(active) + 1)

    validate ? setActive("Step " + numberr) : null;

    // if (numberr >= 1 && numberr <= NavLinks.length) {
    //   navigate(NavLinks[numberr - 1].link);
    // }
    if (validate === true) {
      setValName(false);
      setValEmail(false);
      setValNumber(false);
      setEmailError("");
      numberr >= 1 && numberr <= NavLinks.length
        ? navigate(NavLinks[numberr - 1].link)
        : null;
    } else {
      valName == false ? setValName(false) : setValName(true);
      valEmail == false ? setValEmail(false) : setValEmail(true);
      valNumber == false ? setValNumber(false) : setValNumber(true);
      emailError.trim() == ""
        ? setEmailError("This field is required")
        : emailError;
      // setEmailError("");
    }
  };

  const conFirm = () => {
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

    numberr >= 1 && numberr <= NavLinks.length + 1
      ? navigate("/thank-you")
      : null;

    setNavDis(false);
  };

  useEffect(() => {
    // let goBack = document.querySelectorAll(".navig button")[0];
  }, []);

  return (
    <div
      className={`navig ${
        active === "Step 1" ? "justify-end" : "justify-between"
      } ${navDis ? "flex" : "hidden"}`}
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
