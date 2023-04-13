import { Component } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
    console.log("1) Constructor Run");
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("3) Compionent Did Mount, happens once and never again");
    this.interval = setTimeout(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }
  shouldComponentUpdate() {
    console.log("UPDATE: before render");
    return true;
  }

  componentWillUnmount() {
    console.log("Cleans up asychronous tasks before destroying comp");
    clearInterval(this.interval);
  }
  handleClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log("2) Infinity but Ordered: render");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Add to count</button>
      </div>
    );
  }
}
