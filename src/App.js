import React, { createRef } from "react"
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
      <div style={styles.App}>
        <p>email <input name="email" value={this.state.email} onChange={this.onChange.bind(this)} /> <BtnCopy value={this.state.email} /></p>
        <p>pass <input name="pass" value={this.state.pass} onChange={this.onChange.bind(this)} /> <BtnCopy value={this.state.pass} /></p>
        <p> <a href="https://vt.tiktok.com/ZS8Mv8bPv/" target="_blank">Link An</a></p>
        <p> <a href="https://vt.tiktok.com/ZS8Mv1qy5/" target="_blank">Link Quynh</a></p>
        <p> <a href="https://vt.tiktok.com/ZS8r3TkSB/" target="_blank">Link K</a></p>
        <p> <a href="https://play.google.com/store/apps/details?id=com.dong.autonexttiktok" target="_blank">Auto Next tiktok</a></p>
        
        <p> <a href="https://docs.google.com/spreadsheets/d/1ZpgerK-wuHxGTW4k_MBVqxDmkwv3qhd6QmR65bLlbYo/edit#gid=0" target="_blank">File tài khoản</a></p>
      </div>
    );
  }
}
const styles = {
  App: {
  }
}
export default App;
