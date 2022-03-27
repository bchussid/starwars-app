import React from "react";

function People({ json }) {
  return (
    <div>
      {/* page title */}
      <h2 className="font-extrabold text-4xl text-center text-cyan-400 mt-20 mb-24">
        Characters
      </h2>
      {json.map((people) => (
        //----------------------------beginning of mapped results from API-----------------------------//
        // "container div"
        <div
          className="block flex-auto mx-auto p-6 mb-10 max-w-2xl bg-gray-200 rounded-lg border border-gray-200 shadow-md"
          key={people.name}
        >
          {/* "card" title */}
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {people.name}
          </h5>
          {/* card "list items" start */}
          <p className="text-sm text-gray-700 mb-2 ">
            Born: {people.birth_year}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">Height: {people.height}</p>
          <p className="text-sm text-gray-700 mb-2 ">Mass: {people.mass}</p>
          {/* card "list items" end */}
        </div>
      ))}
    </div>
  );
}

export default People;
