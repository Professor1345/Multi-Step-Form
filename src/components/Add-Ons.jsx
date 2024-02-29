// import React from 'react'

import { useContext } from "react";
import { addOns } from "../constants";
import UserContext from "../UserContext";
import { useState } from "react";

const AddOns = () => {
  const { planToggle, setValidate } = useContext(UserContext);
  const [addonsClick, setAddonsClick] = useState(
    Array(addOns.length).fill(false)
  );
  const addonsHandle = (index) => {
    const newClickAddons = [...addonsClick];
    newClickAddons[index] = !newClickAddons[index];
    setAddonsClick(newClickAddons);
    const indicesO = [];
    for (const [index, value] of newClickAddons.entries()) {
      if (value === true) {
        // console.log(index);
        indicesO.push(index + 1);
      }
    }
    console.log(indicesO);
    
    setValidate(true);
  };

  return (
    <div className="text-[hsl(231,11%,63%)]">
      <div>
        <h2 className="addonsHeader">Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="flex justify-between flex-col mt-4 mb-3 sm:mt-5 sm:mb-4">
        {addOns.map((addons, index) => {
          return (
            <div
              onClick={() => addonsHandle(index)}
              key={addons.id}
              className={`addons-items ${
                addonsClick[index]
                  ? "border-[hsl(243,100%,62%)] bg-[hsl(217,100%,97%)]"
                  : "border"
              }`}
            >
              <div className="flex flex-row flex-1">
                <input
                  type="checkbox"
                  className={`appearance-auto hover:accent-[hsl(243,100%,62%)] accent-[hsl(243,100%,62%)] size-5 shrink-0 my-auto cursor-pointer`}
                  name=""
                  id=""
                  checked={addonsClick[index]}
                  onChange={() => {}}
                />
                <div className="ml-4 sm:ml-5">
                  <div className="text-[hsl(213,96%,18%)] font-semibold">
                    {addons.title}
                  </div>
                  <div>{addons.content}</div>
                </div>
              </div>

              <div className="flex self-center font-semibold text-[hsl(243,100%,62%)]">
                {addons.value.map((value, index) => {
                  return (
                    <div key={index}>
                      {planToggle ? value.monthly : value.yearly}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddOns;
