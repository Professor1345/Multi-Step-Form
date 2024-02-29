// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { Plans } from "../constants";
import UserContext from "../UserContext";

// eslint-disable-next-line react/prop-types
const SelectPlan = () => {
  const [planClick, setPlanClick] = useState();

  const { setValidate, planToggle, setPlanToggle } = useContext(UserContext);
  useEffect(() => {
    const selectedPlan = Plans.find((plan) => plan.title === planClick);
    // If a plan is found, setValidate to true, otherwise false
    setValidate(!!selectedPlan);
  }, [planClick]);
  // const selectPlan = () => {};
  return (
    <div className="select-plan">
      <div>
        <h2 className="selectHeader">Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="flex justify-between flex-col sm:flex-row mt-5 mb-4 sm:mt-7 sm:mb-6">
        {Plans.map((plan) => {
          return (
            <div
              onClick={() => setPlanClick(plan.title)}
              key={plan.id}
              className={`select-items ${
                plan.title === planClick
                  ? "border-[hsl(243,100%,62%)] bg-[hsl(217,100%,97%)]"
                  : "border"
              }`}
            >
              <div className="sm:mb-5 md:mb-6">
                <img src={plan.image} alt={plan.title} className="size-auto" />
              </div>
              <div className="mx-3 sm:mx-0  sm:mt-5 md:mt-6">
                <h3 className="text-[hsl(213,96%,18%)] font-bold">
                  {plan.title}
                </h3>
                <p>{planToggle ? plan.monthly : plan.yearly}</p>
                <p className="text-[hsl(213,96%,18%)] text-sm">
                  {planToggle ? "" : plan.free}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="plan-toggle">
        <div className="mx-2">Monthly</div>
        <div
          className="bg-[hsl(213,96%,18%)] w-10 h-5 rounded-full relative m-auto mx-2 cursor-pointer"
          onClick={() => setPlanToggle(!planToggle)}
        >
          <div
            className={`bg-white size-3 m-1 rounded-full absolute duration-200 ${
              planToggle ? "left-0 duration-200" : "left-1/2 duration-200"
            }`}
          ></div>
        </div>
        <div className="mx-2">Yearly</div>
      </div>
    </div>
  );
};

export default SelectPlan;
