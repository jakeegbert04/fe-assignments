import Counter from "./counter/Counter"
import GreetingToggle from "./GreetingToggle";
import ShowHideToggle from "./ShowHideToggle"
import FontSizer from "./FontSizer"

import "../styles/app.scss"

export default function App() {
  return (
    <div className="App">
      <Counter />
      <GreetingToggle />
      <ShowHideToggle />
      <FontSizer />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      
    </div>
  );
}


