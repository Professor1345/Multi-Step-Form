// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { Plans } from "../constants";
import UserContext from "../UserContext";
import { NavLink, useNavigate } from "react-router-dom";

const Summary = () => {
  const [planSummary, setPlanSummary] = useState(Plans);
  const {
    planToggle,
    planClick,
    setActive,
    setNavDis,
    setValidate,
    setValName,
    setValEmail,
    setValNumber,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const changePlan = () => {
    // localStorage.setItem("active", "Step 1");
    navigate("/select-plan");
    setActive("Step 2");
    setNavDis(true);
    setValidate(false);
    setValName();
    setValEmail();
    setValNumber();
  };

  useEffect(() => {
    setPlanSummary(
      Plans.filter((plan) => {
        return plan.title === planClick;
      })
    );
  }, [planClick]);

  return (
    <div className="summary">
      <div>
        <h2 className="summary-header">Finishing Up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="flex justify-between flex-col mt-5 mb-4 sm:mt-7 sm:mb-6 bg-[hsl(217,100%,97%)] p-4 sm:p-3 md:p-5">
        <div>
          {planSummary.map((plans) => {
            return (
              <div key={plans.id} className="flex flex-row justify-between">
                <div>
                  <div>
                    <span>{plans.title}</span>
                    <span> {planToggle ? "(Monthly)" : "(Yearly)"}</span>
                  </div>
                  <div>
                    <NavLink onClick={changePlan} className="underline">
                      Change
                    </NavLink>
                  </div>
                </div>
                <div className="flex self-center font-semibold text-[hsl(213,96%,18%)]">
                  {planToggle ? plans.monthly : plans.yearly}
                </div>
              </div>
            );
          })}
        </div>
        <hr className="my-3" />
        <div></div>
      </div>
    </div>
  );
};

export default Summary;
