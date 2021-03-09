import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import meals from './meals';

import MealBox from './components/MealBox';
import AddNewMeal from './components/AddNewMeal';
import Search from './components/Search';
import TodayMeals from './components/TodayMeals';

import './App.scss';

class App extends React.Component {
  state = {
    mealList: meals,
    mealListToday: [],
    filter: ''
  };

  addMeal = (meal) => {
    this.setState({ mealList: [meal, ...this.state.mealList] });
  };

  filterChange = (filter) => {
    this.setState({ filter: filter });
  };

  addTodaysMeal = (meal) => {
    const isDuplicate = this.state.mealListToday.find(
      (current) => current.name === meal.name
    );

    if (isDuplicate) {
      const duplicateIndex = this.state.mealListToday.indexOf(
        isDuplicate
      );
      isDuplicate.quantity += Number(meal.quantity);
      this.setState({
        mealListToday: [
          ...this.state.mealListToday.slice(0, duplicateIndex),
          isDuplicate,
          ...this.state.mealListToday.slice(duplicateIndex + 1)
        ]
      });
    } else {
      this.setState({
        mealListToday: [...this.state.mealListToday, meal]
      });
    }
  };

  removeTodayMeal = (meal) => {
    const cloneMealListToday = this.state.mealListToday.filter(
      (meals) => meals.name !== meal
    );
    this.setState({ mealListToday: [...cloneMealListToday] });
  };

  render() {
    return (
      <Container fluid className="App">
        <h1 className="display-3">IronNutrition</h1>
        <AddNewMeal onMealAdd={this.addMeal} />
        <Search
          onFilterChange={this.filterChange}
          filter={this.state.filter}
        />
        <Row xs={1} md={2}>
          <Col>
            {this.state.mealList
              .filter((meal) =>
                meal.name
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase())
              )
              .map((meal) => (
                <MealBox
                  key={meal.name}
                  meal={meal}
                  onMealAdd={this.addTodaysMeal}
                />
              ))}
          </Col>
          <Col>
            <TodayMeals
              meals={this.state.mealListToday}
              onMealRemove={this.removeTodayMeal}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
