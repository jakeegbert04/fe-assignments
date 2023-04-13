import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/main.scss"

import Navbar from "./navigation/Navbar";
import Home from "./pages/Home";
import Counter from "./pages/counter/Counter";
import GreetingToggle from "./pages/GreetingToggle";
import ShowHideToggle from "./pages/ShowHideToggle";
import FontSizer from "./pages/FontSizer";
import TextAligner from "./pages/TextAligner";
import Clock from "./pages/clock/Clock"


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/greeting" component={GreetingToggle}/>
          <Route path="/toggle" component={ShowHideToggle}/>
          <Route path="/font-sizer" component={FontSizer}/>
          <Route path="/text-align" component={TextAligner}/>
          <Route path="/clock" component={Clock}/>
        </Switch>
      </Router>
    </div>
  );
}


