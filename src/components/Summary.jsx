// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { Plans, addOns } from "../constants";
import UserContext from "../UserContext";
import { NavLink, useNavigate } from "react-router-dom";

const Summary = () => {
  const [planSummary, setPlanSummary] = useState(Plans);
  const [addOnsValue, setAddOnsValue] = useState([]);
  const [addOnsValueTotal, setAddOnsValueTotal] = useState();
  const [addOnsSummary, setAddOnsSummary] = useState(addOns);
  const {
    planToggle,
    planClick,
    setActive,
    setNavDis,
    setValidate,
    setValName,
    setValEmail,
    setValNumber,
    addOnsClickIndices,
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
        const filtered = plan.title === planClick;
        // filtered? console.log(plan.monthly) : null;
        return filtered;
      })
    );
  }, [planClick]);

  useEffect(() => {
    // for (const iterator of addOnsClickIndices) {
    //   setAddOnsSummary(
    //     addOns.filter((addons) => {
    //       return addons.id === iterator;
    //     })
    //   );
    // }
    const filteredAddOns = addOns.filter((addons) =>
      addOnsClickIndices.includes(addons.id)
    );
    setAddOnsSummary(filteredAddOns);
    // console.log(addOnsSummary.id);
    const addOnsTotal = [];
    filteredAddOns.forEach((addons) => {
      addons.value.forEach((value) => {
        planToggle
          ? addOnsTotal.push(value.monthly)
          : addOnsTotal.push(value.yearly);
      });
    });
    const addsFiltered = addOnsTotal.filter((addsfilter) => {
      return addsfilter !== undefined;
    });
    const addsFilteredNumberArray = [];
    for (const iterator of addsFiltered) {
      const addsFilteredNumber = iterator.split("/")[0].slice(2);

      addsFilteredNumberArray.push(addsFilteredNumber);
    }
    setAddOnsValue(addsFilteredNumberArray);
  }, [addOnsClickIndices, planToggle]);

  useEffect(() => {
     !isNaN(addOnsValue) || addOnsValue.length > 0
      ? addOnsValue.length > 1
        ? addOnsValue.reduce((value, total) => {
            const totalAddOns = Number(value) + Number(total);
            // console.log(total);
            // total === undefined
            // ? setAddOnsValueTotal(value)
            setAddOnsValueTotal(totalAddOns);
            return totalAddOns;
          })
        : setAddOnsValueTotal(Number(addOnsValue))
      : setAddOnsValueTotal(0);
          // !isNaN(addOnsValueTotal) ? setAddOnsValueTotal(addOnsValueTotal) :setAddOnsValueTotal(0);
    // console.log(addOnsValue);
    console.log(addOnsValueTotal);
  }, [addOnsValueTotal, addOnsValue]);

  return (
    <div className="summary">
      <div>
        <h2 className="summary-header">Finishing Up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="flex justify-between flex-col mt-5 mb-3 sm:mb-2 md:mb-4 bg-[hsl(217,100%,97%)] p-4 sm:p-3 md:p-5">
        <div>
          {planSummary.map((plans) => {
            return (
              <div key={plans.id} className="flex flex-row justify-between">
                <div>
                  <div className="text-[hsl(213,96%,18%)] font-bold">
                    <span>{plans.title}</span>
                    <span> {planToggle ? "(Monthly)" : "(Yearly)"}</span>
                  </div>
                  <div>
                    <NavLink
                      onClick={changePlan}
                      className="underline hover:text-[hsl(243,100%,62%)]"
                    >
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
        <div>
          {addOnsSummary.map((addons) => {
            return (
              <div
                key={addons.id}
                className="flex flex-row justify-between my-2"
              >
                <div>{addons.title}</div>
                <div className="flex self-center font-semibold">
                  {addons.value.map((value, index) => {
                    return (
                      <div key={index}>
                        <span>{planToggle ? value.monthly : value.yearly}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-row justify-between mx-4 sm:mx-3 md:mx-5">
        <div className="my-auto">
          <span>Total</span>
          <span> {planToggle ? "(per month)" : "(per year)"}</span>
        </div>
        <div className="text-[hsl(243,100%,62%)] text-lg md:text-xl font-bold my-auto">
          {planSummary.map((plans) => {
            return (
              <div key={plans.id}>
                <span>+$</span>
                <span>
                  {planToggle
                    ? Number(plans.monthly.split("/")[0].slice(1)) +
                      addOnsValueTotal
                    : Number(plans.yearly.split("/")[0].slice(1)) +
                      addOnsValueTotal}
                </span>
                <span>{planToggle ? "/mo" : "/yr"}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summary;
