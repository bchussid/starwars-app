import React from "react";

function Vehicles({ vehicles }) {
  return (
    <div>
      {/* page title */}
      <h2 className="font-extrabold text-4xl text-center text-cyan-400 mt-20 mb-24">
        Vehicles
      </h2>
      {vehicles.map((vehicle) => (
        //----------------------------beginning of mapped results from API-----------------------------//
        // "container div"
        <div
          className="block flex-auto mx-auto p-6 mb-10 max-w-2xl bg-gray-200 rounded-lg border border-gray-200 shadow-md"
          key={vehicle.name}
        >
          {/* "card" title */}
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {vehicle.name}
          </h5>
          {/* card "list items" start */}
          <p className="text-sm text-gray-700 mb-2 ">Model: {vehicle.model}</p>
          <p className="text-sm text-gray-700 mb-2 ">
            Starship Class: {vehicle.vehicle_class}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Manufacturer: {vehicle.manufacturer}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Price (Galactic Credits): {vehicle.cost_in_credits}
          </p>
          {/* card "list items" end */}
        </div>
      ))}
    </div>
  );
}

export default Vehicles;
