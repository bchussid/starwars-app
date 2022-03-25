import "./style.css";
import Searchables from "./components/Searchables";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        In a code test that's far, far from perfect...
        <Searchables />
      </Router>
    </div>
  );
}

export default App;
