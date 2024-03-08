// import React from 'react'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  // useNavigate,
} from "react-router-dom";
import PersonalInfo from "./components/Personal Info";
import SelectPlan from "./components/Select Plan";
import AddOns from "./components/Add-Ons";
import Summary from "./components/Summary";
import ThankYou from "./components/Thank You";
import ErrorPage from "./components/Error Page";
import RootLayout from "./components/Root Layout";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";

const App = () => {
  const [validate, setValidate] = useState(false);
  // const navigate = useNavigate();
  // const [showvalidate, setShowValidate] = useState(false);

  // PersonalInfo State
  const [valName, setValName] = useState();
  const [valEmail, setValEmail] = useState();
  const [valNumber, setValNumber] = useState();
  const [emailError, setEmailError] = useState("");

  // Select Plane State
  const [planToggle, setPlanToggle] = useState(true);
  const [planClick, setPlanClick] = useState("Arcade");

  // Addons State
  const [addOnsClickIndices, setAddOnsClickIndices] = useState([]);

  // let activeState;
  const [active, setActive] = useState(
    localStorage.getItem("active") || "Step 1"
  );

  // if (localStorage.getItem("active") == undefined) {
  //   // setActive("Step 1");
  //   localStorage.setItem("active", "Step 1");
  // } else {
  //   localStorage.getItem("active");
  // }

  // Windows Reload

  useEffect(() => {
    // const handleBeforeUnload = () => {
    //   // window.location.href = "/";
    //   // window.location.replace("/");
    //   //   window.scrollTo(0,0);
    // };

    // window.addEventListener("beforeunload", handleBeforeUnload);
    if (location.pathname != "/") {
      window.location.replace("/");
    }

    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // }; // navigate("/")
    // window.location.href = "/";
  }, []);

  useEffect(() => {
    localStorage.getItem("active");
    if (window.location.reload) {
      localStorage.setItem("active", "Step 1");
    } else {
      localStorage.setItem("active", active);
    }
  }, [active]);

  // Navigator display when in summary section
  const [navDis, setNavDis] = useState(localStorage.getItem("navDis") || true);
  useEffect(() => {
    // localStorage.getItem("navDis") == undefined
    //   ? setNavDis(true)
    //   : localStorage.getItem("navDis");
    if (window.location.reload) {
      localStorage.setItem("navDis", true);
    } else {
      localStorage.setItem("navDis", navDis);
    }
  }, [navDis]);

  const [summary, setSummary] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route
          path="select-plan"
          element={<SelectPlan summary={summary} setSummary={setSummary} />}
        />
        <Route
          path="add-ons"
          element={<AddOns summary={summary} setSummary={setSummary} />}
        />
        <Route path="summary" element={<Summary summary={summary} />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <UserContext.Provider
      value={{
        active,
        setActive,
        validate,
        setValidate,

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

        planToggle,
        setPlanToggle,
        planClick,
        setPlanClick,

        addOnsClickIndices,
        setAddOnsClickIndices,
      }}
    >
      <div className="bg-[hsl(229,24%,87%)] h-screen block sm:flex justify-center items-center">
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
};

export default App;
