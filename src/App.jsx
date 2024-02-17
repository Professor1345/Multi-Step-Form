// import React from 'react'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PersonalInfo from "./components/Personal Info";
import SelectPlan from "./components/Select Plan";
import AddOns from "./components/Add-Ons";
import Summary from "./components/Summary";
import ThankYou from "./components/Thank You";
import ErrorPage from "./components/Error Page";
import RootLayout from "./components/Root Layout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="select-plan" element={<SelectPlan />} />
        <Route path="add-ons" element={<AddOns />} />
        <Route path="summary" element={<Summary />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return (
    <div className="bg-[hsl(229,24%,87%)] h-screen block sm:flex justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
