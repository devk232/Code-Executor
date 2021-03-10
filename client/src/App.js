import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Ide from "./components/IDE";
import logo from "./logo.svg";
import Input from "./components/input";
import { code } from "./defaultCode";
import "./App.css";

class App extends Component {
  state = {
    data: {
      language: "cpp",
      code: code.cpp,
      input: "",
      result: code.output,
    },
  };
  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: data });
  };
  render() {
    const { language, code, input, result } = this.state.data;
    return (
      <div className="App">
        <Input input={input} onChange={this.handleChange} />

        {/* <BrowserRouter>
        <Route path="/" component={Ide}></Route>
      </BrowserRouter> */}
      </div>
    );
  }
}
export default App;
