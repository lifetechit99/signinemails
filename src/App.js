import React, { createRef } from "react"

import logo from './logo.svg';
import './App.css';
import BtnCopy from "./com/BtnCopy";

class App extends React.Component {
  state = {
    email: "xin chao",
    pass: "passla"
  }
  constructor(props) {
    super(props)
    this.refEmail = createRef()
    this.refPass = createRef()
  }
  onChange(e) {

  }

  render() {
    return (
      <>
        <p>email <input name="email" value={this.state.email} onChange={this.onChange.bind(this)} /> <BtnCopy value={this.state.email} /></p>
        <p>pass <input name="pass" value={this.state.pass} onChange={this.onChange.bind(this)} /> <BtnCopy value={this.state.pass} /></p>
      </>
    );
  }
}

export default App;
