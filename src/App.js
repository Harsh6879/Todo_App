import './App.css';
import React from 'react';
// import Home from './components/Home';
import Home from './containers/HomeContainers';
import ShowList from './containers/ShowListContianer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Redux</h1>
        <Home />
        <div>
          <ShowList />
        </div>
      </div>
    );
  }
}

export default App;
