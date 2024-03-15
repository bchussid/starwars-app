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
    async function fetchData(endPoint) {
      try {
        const res = await axios.get(`https://swapi.dev/api/${endPoint}`);
        return res.data.results;
      } catch (err) {
        console.error("Fetching error: ", err);
        return [];
      }
    }
    function fetchAllData() {
      const films = fetchData("films");
      console.log("films fetched");
      const people = fetchData("people");
      console.log("people fetched");
      const planets = fetchData("planets");
      console.log("planets fetched");
      const species = fetchData("species");
      console.log("species fetched");
      const starships = fetchData("starships");
      console.log("starships fetched");
      const vehicles = fetchData("vehicles");
      console.log("vehicles fetched");

      Promise.all([films, people, planets, species, starships, vehicles])
        .then(
          ([
            filmsData,
            peopleData,
            planetsData,
            speciesData,
            starshipsData,
            vehiclesData,
          ]) => {
            setFilms(filmsData);
            setPeople(peopleData);
            setPlanets(planetsData);
            setSpecies(speciesData);
            setStarships(starshipsData);
            setVehicles(vehiclesData);
            setLoading(false);
          }
        )
        .catch((err) => console.error("Error fetching all data: ", err));
    }

    fetchAllData();
  }, []);

  /*
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
