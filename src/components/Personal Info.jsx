// import React from 'react'

const PersonalInfo = () => {
  return (
    <div className="text-[hsl(231,11%,63%)] flex flex-col">
      <div>
        <h2 className="personHeader">Personal Info</h2>
        <p> Please provide your name, email address, and phone number.</p>
      </div>
      <div className="my-2">
        <div className="personInput">
          <h3 className="text-[hsl(213,96%,18%)] my-2 font-semibold">Name</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="w-full rounded-md p-2 border-solid border border-[hsl(231,11%,63%)]"
          />
        </div>

        <div className="personInput">
          <h3 className="text-[hsl(213,96%,18%)] my-2 font-semibold">Name</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="w-full rounded-md p-2 border-solid border border-[hsl(231,11%,63%)]"
          />
        </div>

        <div className="personInput">
          <h3 className="text-[hsl(213,96%,18%)] my-2 font-semibold">Name</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="w-full rounded-md p-2 border-solid border border-[hsl(231,11%,63%)]"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
