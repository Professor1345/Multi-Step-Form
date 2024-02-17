// import React from 'react'

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-xl my-3 text-center font-bold text-[hsl(213,96%,18%)]">
        Page not found
      </div>
      <div className="text-center">
        <Link className=" underline text-[hsl(213,96%,18%)]" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
