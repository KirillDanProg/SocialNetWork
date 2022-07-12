import React from "react"
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = () => {
  root.render(
    <Provider store={store}>
      <App  />
    </Provider>
  );
};

store.subscribe(renderEntireTree);

renderEntireTree(() => {
  let state = store.getState();
  renderEntireTree(state);
});

reportWebVitals();
