import Counter from "./counter/Counter"
import GreetingToggle from "./GreetingToggle";
import ShowHideToggle from "./ShowHideToggle"

import "../styles/app.scss"

export default function App() {
  return (
    <div className="App">
      <Counter />
      <GreetingToggle />
      <ShowHideToggle />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      
    </div>
  );
}


