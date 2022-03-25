import { useState, useEffect } from "react";

const localCache = {};

function useResultsList(topic) {
  const [resultsList, setResultsList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!topic) {
      setResultsList([]);
    } else if (localCache[topic]) {
      setResultsList(localCache[topic]);
    } else {
      requestResults();
    }

    async function requestResults() {
      setResultsList([]);
      setStatus("loading");
      const res = await fetch(`https://swapi.dev/api/${topic}`);
      const json = await res.json();
      const resultsArr = json.results;
      if (topic === "films") {
        let titles = resultsArr.map((movie) => movie.title);
        localCache[topic] = titles
        setResultsList(localCache[topic]);
        setStatus("loaded");
      } else {
        let names = resultsArr.map((thing) => thing.name);
        localCache[topic] = names
        setResultsList(localCache[topic]);
        setStatus("loaded");
      }
    }
  }, [topic]);

  return [resultsList, status];
}

export default useResultsList;
