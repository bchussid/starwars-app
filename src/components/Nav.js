import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    // nav wrapper
    <nav className="md:bg-yellow-300 px-2 sm:px-4 py-3">
      {/* flex container */}
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* home link */}
        <Link
          to="/"
          className="block py-2 pr-4 pl-3 text-yellow-300 border border-gray-100 hover:bg-gray-50 hover:text-gray-900 md:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:mt-0 md:text-sm md:font-medium md:p-0"
        >
          Home
        </Link>
        {/* home link end */}
        {/* start of pages "list" */}
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          {/* films start */}
          <Link
            to="/films"
            className="block py-2 pr-4 pl-3 text-yellow-300 border-b border-gray-100 hover:bg-gray-50 hover:text-gray-900 md:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 "
          >
            <li>Films</li>
          </Link>
          {/* films end */}
          {/* people start */}
          <li>
            <Link
              to="/people"
              className="block py-2 pr-4 pl-3 text-yellow-300 border-b border-gray-100 hover:bg-gray-50 hover:text-gray-900 md:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0"
            >
              People
            </Link>
          </li>
          {/* people end */}
          {/* planets start */}
          <li>
            <Link
              to="/planets"
              className="block py-2 pr-4 pl-3 text-yellow-300 border-b border-gray-100 hover:bg-gray-50 hover:text-gray-900 md:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0"
            >
              Planets
            </Link>
          </li>
          {/* planets end */}
          {/* species start */}
          <li>
            <Link
              to="/species"
              className="block py-2 pr-4 pl-3 text-yellow-300 border-b border-gray-100 hover:bg-gray-50 hover:text-gray-900 md:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0"
            >
              Species
            </Link>
          </li>
          {/* species end */}
          {/* starships start */}
          <li>
            <Link
              to="/starships"
              className="block py-2 pr-4 pl-3 text-yellow-300 border-b border-gray-100 hover:bg-gray-50 hover:text-gray-900 md:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 "
            >
              Starships
            </Link>
          </li>
          {/* starships end */}
          {/* vehicles start */}
          <li>
            <Link
              to="/vehicles"
              className="block py-2 pr-4 pl-3 text-yellow-300 border-b border-gray-100 hover:bg-gray-50 hover:text-gray-900 md:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0"
            >
              Vehicles
            </Link>
          </li>
          {/* vehicles end */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
