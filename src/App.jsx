import React from 'react';
import './App.scss';

import meals from './meals';

import MealBox from './components/MealBox';
import AddNewMeal from './components/AddNewMeal';
import Search from './components/Search';

class App extends React.Component {
  state = {
    mealList: meals,
    filter: ''
  };

  addMeal = (meal) => {
    this.setState({ mealList: [meal, ...this.state.mealList] });
  };

  filterChange = (filter) => {
    this.setState({ filter: filter });
  };

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <AddNewMeal onMealAdd={this.addMeal} />
        <Search onFilterChange={this.filterChange} filter={this.state.filter} />
        {this.state.mealList
          .filter((meal) =>
            meal.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )
          .map((meal) => (
            <MealBox key={meal.name} meal={meal} />
          ))}
      </div>
    );
  }
}

export default App;
