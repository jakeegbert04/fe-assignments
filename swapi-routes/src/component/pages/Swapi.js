import { useEffect, useState } from "react";


export default function Products() {
  const [person, setPerson] = useState({})
  const [planet, setPlanet] = useState({})
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch("https://swapi.tech/api/people/1", {
      signal
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setPerson(data.result.properties);
      })
      .catch((err) => {
        console.error("Get Person Error: ", err);
      });

    return () => controller.abort();
  }, []);
  
  useEffect(() => {
    if(person.homeworld) {
      const controller = new AbortController();
      const { signal } = controller;
      fetch(`${person.homeworld}`, {
        signal
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setPlanet(data.result.properties);
        })
        .catch((err) => {
          console.error("Get Person Error: ", err);
        });
  
      return () => controller.abort();
    }
  }, [person]);



    return (
      <div className="products-container">
        <h1>{person.name || "Not Found"}</h1>

        <div className="products-grid">
          <div>Gender: {person.gender  || "Not Found"}</div>
          <div>Hair Color: {person.hair_color || "Not Found"}</div>
          <div>Eye Color:  {person.eye_color || "Not Found"}</div>
        </div>
        <button onClick={() => setToggle((tog) => !tog)}>
          {toggle ? "Unmount" : "Mount"}
        </button>
        {toggle && <div>Planet: {planet.name}</div>}
      </div>
    );
}
