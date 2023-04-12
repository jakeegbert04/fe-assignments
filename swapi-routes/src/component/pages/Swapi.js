import { useEffect, useState } from "react";


export default function Products() {
  const [person, setPerson] = useState({})

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
  });

  // renderProducts() {
  //   return this.state.products.map((product) => {
  //     return <ProductItem key={product.id} product={product} />;
  //   });
  // }

    return (
      <div className="products-container">
        <h1>{person.name || "Not Found"}</h1>

        <div className="products-grid">
          {/* {this.state.isLoading ? <div>...Loading</div> : this.renderProducts()} */}
          Gender: {person.gender  || "Not Found"}
          Hair Color: {person.hair_color || "Not Found"}
          Eye Color:  {person.eye_color || "Not Found"}
          
        </div>
      </div>
    );
}
