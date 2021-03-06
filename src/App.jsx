import React from 'react';
import './App.scss';

import meals from './meals';

import MealBox from './components/MealBox';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <MealBox />
      </div>
    );
  }
}

export default App;
