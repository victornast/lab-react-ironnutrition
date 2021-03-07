import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import meals from './meals';

import MealBox from './components/MealBox';
import AddNewMeal from './components/AddNewMeal';
import Search from './components/Search';

import './App.scss';

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
                <MealBox key={meal.name} meal={meal} />
              ))}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
