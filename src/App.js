import React from 'react';
import { Provider } from 'react-redux'
import DashboardContainer from "./components/DashboardContainer";
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DashboardContainer />
      </div>
    </Provider>
  );
}

export default App;
