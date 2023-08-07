import React from "react";

function Planets({ planets }) {
  return (
    <div>
      {/* page title */}
      <h2 className="font-extrabold text-4xl text-center text-cyan-400 mt-20 mb-24">
        Planets
      </h2>
      {planets.map((planet) => (
        //----------------------------beginning of mapped results from API-----------------------------//
        // "container div"
        <div
          className="block flex-auto mx-auto p-6 mb-10 max-w-2xl bg-gray-200 rounded-lg border border-gray-200 shadow-md"
          key={planet.name}
        >
          {/* "card" title */}
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {planet.name}
          </h5>
          {/* card "list items" start */}
          <p className="text-sm text-gray-700 mb-2 ">
            Population: {planet.population}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Rotation Period: {planet.rotation_period}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Orbital Period: {planet.orbital_period}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Gravity: {planet.gravity}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 font-style: italic">
            {planet.species}
          </p>
          {/* card "list items" end */}
        </div>
      ))}
    </div>
  );
}

export default Planets;
