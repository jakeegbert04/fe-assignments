import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/main.scss"

import Navbar from "./navigation/Navbar";
import Home from "./pages/Home";
import Counter from "./counter/Counter";
import GreetingToggle from "./pages/GreetingToggle";
import ShowHideToggle from "./pages/ShowHideToggle";
import FontSizer from "./pages/FontSizer";
import TextAligner from "./pages/TextAligner";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/greeting" component={GreetingToggle}/>
          <Route exact path="/toggle" component={ShowHideToggle}/>
          <Route exact path="/font-sizer" component={FontSizer}/>
          <Route exact path="/text-align" component={TextAligner}/>
        </Switch>
      </Router>
    </div>
  );
}


