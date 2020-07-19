import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";

import RootApp from "./Components/Main/RootApp";

function App() {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

export default App;
