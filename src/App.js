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
    async function fetchData(endPoint, setData) {
      try {
        const res = await axios.get(`https://swapi.dev/api/${endPoint}`)
        setData(res.data.results)
      } catch (err) {
        console.error('Fetching error: ', err)
      }
    }

    async function fetchFilms() {
      await fetchData('films', setFilms)
      console.log('loaded films')
    }
    async function fetchPeople() {
      await fetchData('people', setPeople)
      console.log('loaded people')
    }
    async function fetchPlanets() {
      await fetchData('planets', setPlanets)
      console.log('loaded planets')
    }
    async function fetchSpecies() {
      await fetchData('species', setSpecies)
      console.log('loaded species')
    }
    async function fetchStarships() {
      await fetchData('starships', setStarships)
      console.log('loaded starships')
    }
    async function fetchVehicles() {
      await fetchData('vehicles', setVehicles)
      console.log('loaded vehicles')
    }

    fetchFilms();
    fetchPeople();
    fetchPlanets();
    fetchSpecies();
    fetchStarships();
    fetchVehicles();
    setLoading(false);
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

  
  useEffect(() => {
    console.log('loading', loading)
  }, [loading])

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
            <Route path="/starships" element={<Starships starships={starships} />} />
            <Route path="/vehicles" element={<Vehicles vehicles={vehicles} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

