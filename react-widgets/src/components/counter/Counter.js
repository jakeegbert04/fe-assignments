import { Component } from "react"

export default class Counter extends Component {
  constructor() {
    super();

    this.state= {
      count: 0
    }
  }
  render() {
    return (
      <div className="counter-contaimer">
        <div className="display-number"><h1></h1></div>
  
      </div>
    )
  }
}