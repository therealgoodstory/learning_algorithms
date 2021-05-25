import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import './index.css';
import store, { history } from "./redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import BinarySearch from './components/BinarySearch';
import MoonAlgorithms from './components/MoonAlgorithm';

const Main = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route exact path="/binary-search" render={() => <BinarySearch />} />
          <Route exact path="/moon-algorithm" render={() => <MoonAlgorithms />} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById("root");

ReactDOM.render(<Main />, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
