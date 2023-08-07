import React from "react";

function Films({ films }) {
  return (
    <div>
      {/* page title */}
      <h2 className="font-extrabold text-4xl text-center text-cyan-400 mt-20 mb-24">
        Films
      </h2>
      {films.map((film) => (
        //----------------------------beginning of mapped results from API-----------------------------//
        // "container div"
        <div
          data-testid="films-list"
          className="block flex-auto mx-auto p-6 mb-10 max-w-2xl bg-gray-200 rounded-lg border border-gray-200 shadow-md"
          key={film.title}
        >
          {/* "card title" */}
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {film.title}
          </h5>
          {/* card "list items" start */}
          <p className="text-sm text-gray-700 mb-2">
            Episode: {film.episode_id}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Released: {film.release_date}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Directed by: {film.director}
          </p>
          <p className="text-sm text-gray-700 mb-2 ">
            Produced by: {film.producer}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 font-style: italic">
            {film
            .opening_crawl}
          </p>
          {/* card "list items" end */}
        </div>
      ))}
    </div>
  );
}

export default Films;
