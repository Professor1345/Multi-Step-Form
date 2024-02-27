// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Navigator from "./Navigator";
// import { useEffect, useState } from "react";

const RootLayout = () => {
  // useEffect(() => {
  //   localStorage.setItem("active", active);
  // }, [active]);
  

  return (
    <div className="root-layout">
      <Navbar
        // active={active}
        // setActive={setActive}
        // navDis={navDis}
        // setNavDis={setNavDis}
      />
      <main className="section ">
        <div className="outLet ">
          <Outlet />
        </div>
        <Navigator
          // active={active}
          // setActive={setActive}
          // navDis={navDis}
          // setNavDis={setNavDis}
        />
      </main>
    </div>
  );
};

export default RootLayout;
