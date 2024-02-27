// import React from 'react'

import { useContext, useEffect } from "react";
import UserContext from "../UserContext";

const PersonalInfo = () => {
  const {
    setValidate,
    valName,
    setValName,
    valEmail,
    setValEmail,
    valNumber,
    setValNumber,
    emailError,
    setEmailError,
  } = useContext(UserContext);

  // useEffect(() => {
  //   valName === false ? setValidate(false) : setValidate(true);
  // }, [valName]);

  // useEffect(() => {
  //   if (showValidate === false) {
  //     setValName(true);
  //     setValEmail(true);
  //     setValNumber(true);
  //   }

  //   if (showValidate === undefined) {
  //     setValName(false);
  //     setValEmail(false);
  //     setValNumber(false);}
  //     if (showValidate === true) {
  //     setValName(false);
  //     setValEmail(false);
  //     setValNumber(false);
  //   }
  // }, [showValidate]);

  useEffect(() => {
    if (valName === true || valEmail === true || valNumber === true) {
      setValidate(false);
      console.log("Setting validate to false...");
    } else {
      setValidate(true);
      console.log("Setting validate to true...");
    }

    if (
      valName === undefined ||
      valEmail === undefined ||
      valNumber === undefined
    ) {
      setValidate(false);
      // Otherwise, setValidate to true
      console.log("Setting validate to false...");
    }
  }, [valName, valEmail, valNumber]); // Specify dependencies here

  // const changeEmail = () => {
  //   let input = document.getElementById("email").value;

  //   let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  //   // OR let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   try {
  //     if (input == "".trim()) throw "The input field is empty.";
  //     if (!emailRegex.test(input)) throw "Please insert a valid email";
  //     else {
  //       return true;
  //     }
  //     // if (input.t)
  //   } catch (error) {
  //     // output[0].style.display = "block";
  //     alert(error);
  //     return false;
  //   } finally {
  //     document.getElementById("email").value = "";
  //   }
  // };
  const validateName = () => {
    let name = document.getElementById("name");
    name.value.trim() == "" ? setValName(true) : setValName(false);
  };

  const validateEmail = () => {
    let email = document.getElementById("email");
    // let emailError = document.getElementById("emailError");
    // let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // if (email.value.trim() == "") {
    //   setValEmail(true);
    //   setEmailError("This field is required");
    // } else {
    //   setValEmail(false);
    //   setEmailError("");
    // }

    try {
      if (email.value.trim() == "") throw "This field is required";
      if (!emailRegex.test(email.value))
        throw "The email address is not formatted correctly";
      else {
        setValEmail(false);
        setEmailError("");
      }
    } catch (error) {
      setEmailError(error);
      setValEmail(true);
    }
  };

  const validateNumber = () => {
    let number = document.getElementById("number");
    number.value.trim() == "" ? setValNumber(true) : setValNumber(false);
  };

  return (
    <div className="text-[hsl(231,11%,63%)] flex flex-col">
      <div>
        <h2 className="personHeader">Personal Info</h2>
        <p> Please provide your name, email address, and phone number.</p>
      </div>
      <div className="my-2">
        <div className="personInput">
          <div className="flex justify-between flex-row">
            <h3 className="text-[hsl(213,96%,18%)] my-2 font-semibold">Name</h3>
            <h3
              className={`text-[hsl(354,_84%,_57%)] my-auto font-semibold ${
                valName ? "block" : "hidden"
              }`}
            >
              This field is required
            </h3>
          </div>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            autoComplete="name"
            required
            className={`w-full rounded-md p-2 border-solid border outline-none border-[hsl(231,11%,63%)] 
            ${
              valName
                ? " focus:border-[hsl(354,_84%,_57%)] hover:border-[hsl(354,_84%,_57%)] border-[hsl(354,_84%,_57%)] focus:border"
                : "focus:border-[hsl(243,_100%,_62%)] hover:border-[hsl(243,_100%,_62%)] focus:border"
            }`}
            // value={inputName}
            onChange={validateName}
            onBlur={validateName}
          />
        </div>

        <div className="personInput">
          <div className="flex justify-between flex-row">
            <h3 className="text-[hsl(213,96%,18%)] my-2 font-semibold">
              Email Address
            </h3>
            <h3
              // id="emailError"
              className={`text-[hsl(354,_84%,_57%)] my-auto font-semibold ${
                valEmail ? "block" : "hidden"
              }`}
            >
              {emailError}
            </h3>
            {/* <h3
              className={`text-[hsl(354,_84%,_57%)] my-auto font-semibold ${
                valEmail ? "block" : "hidden"
              }`}
            >
              This field is required
            </h3> */}
          </div>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            autoComplete="email"
            required
            className={`w-full rounded-md p-2 border-solid border border-[hsl(231,11%,63%)] hover:border-[hsl(243,_100%,_62%)] outline-none  ${
              valEmail
                ? " focus:border-[hsl(354,_84%,_57%)] hover:border-[hsl(354,_84%,_57%)] border-[hsl(354,_84%,_57%)] focus:border"
                : "focus:border-[hsl(243,_100%,_62%)] hover:border-[hsl(243,_100%,_62%)] focus:border"
            }`}
            onChange={validateEmail}
            onBlur={validateEmail}

            // onBlur={changeEmail}
            // onChange={(e) => {
            //   e.target.value;
            // }}
          />
        </div>

        <div className="personInput">
          <div className="flex justify-between flex-row">
            <h3 className="text-[hsl(213,96%,18%)] my-2 font-semibold">
              Phone Number
            </h3>
            <h3
              className={`text-[hsl(354,_84%,_57%)] my-auto font-semibold ${
                valNumber ? "block" : "hidden"
              }`}
            >
              This field is required
            </h3>
          </div>

          <input
            type="number"
            name="number"
            id="number"
            placeholder="e.g. +1 234 567 890"
            autoComplete="number"
            required
            className={`w-full rounded-md p-2 border-solid border border-[hsl(231,11%,63%)] outline-none
            ${
              valNumber
                ? " focus:border-[hsl(354,_84%,_57%)] hover:border-[hsl(354,_84%,_57%)] border-[hsl(354,_84%,_57%)] focus:border"
                : "focus:border-[hsl(243,_100%,_62%)] hover:border-[hsl(243,_100%,_62%)] focus:border"
            }
            `}
            onChange={validateNumber}
            onBlur={validateNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
