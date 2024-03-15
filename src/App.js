import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Films from "./components/Films";
import People from "./components/People";
import Planets from "./components/Planets";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import Home from "./components/Home";
import axios from "axios";

export default function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  // handle loading state
  const [loading, setLoading] = useState(true);

  //--------------------------- fetching functions start ------------------------//

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  useEffect(() => {
    async function fetchData(endPoint, setData) {
      try {
        const res = await axios.get(`https://swapi.dev/api/${endPoint}`);
        setData(res.data.results);
      } catch (err) {
        console.error("Fetching error: ", err);
      }
    }

    async function fetchAllData() {
      try {
        await Promise.all([
          fetchData("films", setFilms),
          // console.log("films fetched"),
          fetchData("people", setPeople),
          // console.log("people fetched"),
          fetchData("planets", setPlanets),
          // console.log("planets fetched"),
          fetchData("species", setSpecies),
          // console.log("species fetched"),
          fetchData("starships", setStarships),
          // console.log("starships fetched"),
          fetchData("vehicles", setVehicles),
          // console.log("vehicles fetched"),
        ]);
        console.log("all data fetched");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    }

    fetchAllData();
  }, []);

  /*
  Challenge...
    I'm using the console.logs above to log when the data from each function has loaded.
    I'm using the `useEffect` below to console.log the `loading` state any time it changes.

    As you can see in the console/network calls, `loading` flips back to `false` long before
    the data from these functions is loaded in, thus making this `loading` state useless.

    CHALLENGE: Please refactor the `useEffect` above to make sure that all the data from these
    functions is actually loaded BEFORE `loading` gets set to `false`.

    There are multiple correct ways of doing this.
    Please try to find the optimal solution and explain why you chose it.
    May the force be with you!
  */

  /*
  Solution...
    The first thing that I noticed was that the fetching functions were being run sequentially, awaiting the previous one to finish before starting the next one. And great call-out about the loading state.
    
    Assuming we want to keep with the same general approach of fetching all data up front (and of course implementing the loading state in the right way), doing so in the way above using Promise.all() would be a far more optimal solution. This way the data is fetched concurrently (in parallel) instead of sequentially. Load time is reduced, and the loading state is acting as expected (see console and I'll attach screenshots in a follow-up email).

    Another benefit of doing it this way, is that if one of the api routes is down (which can be tested by introducing a typo to one of the individual fetchData calls) the rest of the data will still be fetched. 

    And either way, the Promise.all() method is awaited, ensuring that loading will be set to `false` only after all the data is fetched. I left plenty of console.logs in there to help see this (something I would never do in production code of course).


    I also want to address that while this is still perfectly fine for this app, but for a medium/large API I would explore even more optimal solutions like fetching/loading data in as needed. I implement a strategy like this in my 'restaurant picker' app by making use of a dropdown menu and a custom hook (called 'usePlaceList'). I can see about implementing a similar strategy here but I think you'll be able to see what I mean by looking at that code.

    And may the force be with you as well...

    */

  return (
    <div>
      <Router>
        <Nav />
        {loading ? (
          "Loading..."
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/films" element={<Films films={films} />} />
            <Route path="/people" element={<People people={people} />} />
            <Route path="/planets" element={<Planets planets={planets} />} />
            <Route path="/species" element={<Species species={species} />} />
            <Route
              path="/starships"
              element={<Starships starships={starships} />}
            />
            <Route
              path="/vehicles"
              element={<Vehicles vehicles={vehicles} />}
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}
