import React, { Component } from "react";
import Bar from "./components/Bar";

// CSS
import "./App.css";

class App extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: 10,
    delay: 100,
    // After some particular delay, it should get re-render
    algorithm: "",
    timeouts: [],
  };

  componentDidMount() {
    this.generateRandomArray();
  }
  // Math.random() : Generates a pseudorandom floating-point number between 0 (inclusive) and 1 (exclusive)
  // Math.floor : Rounds a number down to the nearest integer (whole number) and Discards any decimal places.

  // Math.random() value could be between 0.0 and 1.0
  // max = 50 and min = 10
  // So, max - min = 40

  // If Math.random() is 0.0  ==>  0.0 * 40 + 10  ==> 0  + 10 = 10
  // If Math.random() is 1.0  ==>  1.0 * 40 + 10  ==> 40 + 10 = 50
  // So, we will get value from 10 to 50 only
  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateRandomArray = () => {
    const count = this.state.count;
    const temp = [];

    for (let i = 0; i < count; i++) {
      temp.push(this.generateRandomNumber(50, 200));
    }
    // console.log(temp);

    this.setState({
      array: temp,
      arraySteps: [temp],
    });
  };
  render() {
    let bars = this.state.array.map((value, index) => {
      return (
        <Bar
          key={index}
          index={index}
          length={value}
          color={this.state.colorKey[index]}
        />
      );
    });
    return (
      <div className="App">
        {/* <h1>Deepak Chourasiya</h1> */}
        {bars}
      </div>
    );
  }
}

export default App;
