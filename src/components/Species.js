import React from "react";

function Species({ species }) {
  return (
    <div>
      {/* page title */}
      <h2 className="font-extrabold text-4xl text-center text-cyan-400 mt-20 mb-24">
        Species
      </h2>
      {species.map((species) => (
        //----------------------------beginning of mapped results from API-----------------------------//
        // "container div"
        <div
          className="block flex-auto mx-auto p-6 mb-10 max-w-2xl bg-gray-200 rounded-lg border border-gray-200 shadow-md"
          key={species.name}
        >
          {/* "card" title */}
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {species.name}
          </h5>
          {/* card "list items" start */}
          <p className="text-sm text-gray-700 mb-2 ">
            Classification: {species.classification}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Designation: {species.designation}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Language: {species.language}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Average Lifespan: {species.average_lifespan}
          </p>
          {/* card "list items" end */}
        </div>
      ))}
    </div>
  );
}

export default Species;
