import { Component } from "react";

export default class GreetingToggle extends Component {
  constructor() {
    super();

    this.state = {
      toggle: false
    }

    this.handleToggle = this.handleToggle.bind(this)

  }

  handleToggle() {
    this.setState((prevState) => ({ toggle: !prevState.toggle }))
  }

  render() {
    const { toggle } = this.state
    return (
      <div className="main-container greeting-toggle">
        <div className="display display-greeting">{toggle ? "googbye" : "hello"} </div>
        <button onClick={this.handleToggle}>Toggle Me</button>

      </div>
    )
  }
}