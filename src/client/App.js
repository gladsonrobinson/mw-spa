import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppCtnr from "./containers/App";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppCtnr />
      </Provider>
    );
  }
}
