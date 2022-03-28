import React from "react";

function Films({ json }) {
  return (
    <div>
      {/* page title */}
      <h2 className="font-extrabold text-4xl text-center text-cyan-400 mt-20 mb-24">
        Films
      </h2>
      {json.map((films) => (
        //----------------------------beginning of mapped results from API-----------------------------//
        // "container div"
        <div
          data-testid="films-list"
          className="block flex-auto mx-auto p-6 mb-10 max-w-2xl bg-gray-200 rounded-lg border border-gray-200 shadow-md"
          key={films.title}
        >
          {/* "card title" */}
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {films.title}
          </h5>
          {/* card "list items" start */}
          <p className="text-sm text-gray-700 mb-2">
            Episode: {films.episode_id}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Released: {films.release_date}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Directed by: {films.director}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Produced by: {films.producer}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 font-style: italic">
            {films.opening_crawl}
          </p>
          {/* card "list items" end */}
        </div>
      ))}
    </div>
  );
}

export default Films;
