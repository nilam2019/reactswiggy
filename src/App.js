import React from 'react';
import logo from './logo.svg';
import './App.css';
import Swiggy from "./container/swiggy"
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Swiggy />
    </Provider>
    // <div className="App">
      
    // </div>
  );
}

export default App;
