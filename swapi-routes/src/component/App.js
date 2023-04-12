import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "../styles/main.scss"
import Navbar from "./navigation/Navbar"
import Home from "./pages/Home"
import Swapi from "./pages/Swapi"



export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/swapi" component={Swapi} />
        </Switch>
      </Router>
    </div>
  );
}


