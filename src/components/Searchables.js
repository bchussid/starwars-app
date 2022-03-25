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
  const [items, setItems] = useState("");
  const [results] = useResultsList(topic);
  const [url, setUrl] = useState("");

  //todo figure out how to render list of results from topic selected - reference poke app for 'next'/'prev' capabilities
  //todo render either new page or modal (make results clickable) to bring up each specific item's attributes
  //todo look into 'resultsList.map is not a function & key prop errors
  //todo user should just search by movie?

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
        <Link>
          <div value={items} key={items}>
            {items}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Searchables;
