import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useResultsList from "./useResultsList";

const TOPICS = [
  "films",
  "people",
  "planets",
  "species",
  "starships",
  "vehicles",
];

function Searchables() {
  const [topic, setTopic] = useState("");
  const [results, resultsObj] = useResultsList(topic);
  //for pagination?
  // const [links, setLinks] = useState({ next: null, prev: null });
  const [indvURLs, setIndvURLs] = useState("");

  console.log(resultsObj);

  //a way of getting individual urls
  // useEffect(() => {
  //   if (resultsObj.results) {
  //     resultsObj.results.map((indvResults) =>
  //       setIndvURLs(indvResults.url));
  //       console.log(indvURLs)
  //     }
  //     return indvURLs;
  // }, [resultsObj.results, indvURLs]);

  //a way of getting individial items' details

  useEffect(() => {
    async function getDetails() {
      const res = await fetch(`https://swapi.dev/api/${topic}/`);

      const json = await res.json();
      // console.log(json.results);

      let resultsArr = json.results;
      if (resultsArr) {
        resultsArr.map((indvObj) => setIndvURLs(indvObj.url));
      }
    }
    getDetails(results);
    

  }, [topic, results]);

  // console.log(indvURLs);
  return (
    <div>
      <label htmlFor="topic">
        Topics to explore
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onBlur={(e) => setTopic(e.target.value)}
        >
          <option />
          {TOPICS.map((topic) => (
            <option value={topic} key={topic}>
              {topic}
            </option>
          ))}
        </select>
      </label>
      <br />

      {results.map((items) => (
        <Link to={indvURLs}>
          <div value={items} key={items}>
            {items}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Searchables;
