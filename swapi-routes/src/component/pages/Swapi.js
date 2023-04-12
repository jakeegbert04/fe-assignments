// import { Component } from "react";
// import Products from "./Products";
// import ProductItem from "../products/ProductItem";

// export default class Product extends Component {
//   constructor() {
//     super();

//     this.state = {
//       product: {}
//     };
//   }
//   componentDidMount() {
//     this.setState({
//       product: Products.find(
//         (item) => item.id === Number(this.props.match.params.slug)
//       )
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Show Route</h1>
//         <ProductItem />
//       </div>
//     );
//   }
// }