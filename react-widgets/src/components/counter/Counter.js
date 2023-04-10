import { Component } from "react"
import CounterControls from "./CounterControls"

export default class Counter extends Component {
  constructor() {
    super();

    this.state= {
      count: 0
    }

    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.handleClickMinus = this.handleClickMinus.bind(this)
  }

  handleClickAdd() {
    this.setState((prevState => ({count: prevState.count + 1})))
  }

  handleClickMinus() {
    this.setState((prevState => ({count: prevState.count - 1})))

  }


  render() {
    return (
      <div className="counter-contaimer">
        <div className="display-number"><h1>{this.state.count}</h1></div>
        <CounterControls
        handleClickAdd={this.handleClickAdd}
        handleClickMinus={this.handleClickMinus}
        />
  
      </div>
    )
  }
}