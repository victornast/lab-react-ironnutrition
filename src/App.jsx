import React from 'react';
import './App.scss';

import meals from './meals';

import MealBox from './components/MealBox';
import AddNewMeal from './components/AddNewMeal';

class App extends React.Component {
  state = {
    mealList: meals
  };

  addMeal = (meal) => {
    this.setState({ mealList: [meal, ...this.state.mealList] });
  };

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <AddNewMeal onMealAdd={this.addMeal} />
        {this.state.mealList.map((meal) => (
          <MealBox key={meal.name} meal={meal} />
        ))}
      </div>
    );
  }
}

export default App;
