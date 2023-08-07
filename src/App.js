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

function App() {
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
    async function fetchFilms() {
      const res = await fetch(`https://swapi.dev/api/films`);
      const json = await res.json();
      setFilms(json.results);
    }
    async function fetchPeople() {
      const res = await fetch(`https://swapi.dev/api/people`);
      const json = await res.json();
      setPeople(json.results);
    }
    async function fetchPlanets() {
      const res = await fetch(`https://swapi.dev/api/planets`);
      const json = await res.json();
      setPlanets(json.results);
    }
    async function fetchSpecies() {
      const res = await fetch(`https://swapi.dev/api/species`);
      const json = await res.json();
      setSpecies(json.results);
    }
    async function fetchStarships() {
      const res = await fetch(`https://swapi.dev/api/starships`);
      const json = await res.json();
      setStarships(json.results);
    }
    async function fetchVehicles() {
      const res = await fetch(`https://swapi.dev/api/vehicles`);
      const json = await res.json();
      setVehicles(json.results);
    }
    //--------------------------- fetching functions end ------------------------//
    fetchFilms();
    fetchPeople();
    fetchPlanets();
    fetchSpecies();
    fetchStarships();
    fetchVehicles();
    setLoading(false);
  }, []);

  return (
    <div>
      <Router>
        <Nav />
        {loading ? (
          "Loading..."
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/films" element={<Films json={films} />} />
            <Route path="/people" element={<People json={people} />} />
            <Route path="/planets" element={<Planets json={planets} />} />
            <Route path="/species" element={<Species json={species} />} />
            <Route path="/starships" element={<Starships json={starships} />} />
            <Route path="/vehicles" element={<Vehicles json={vehicles} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
