import React from 'react';
import { Provider } from 'react-redux'
import DashboardContainer from "./components/DashboardContainer";
import configureStore from './redux/store'
import './App.css';

const store = configureStore()

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
