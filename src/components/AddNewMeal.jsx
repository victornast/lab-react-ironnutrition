import React from 'react';
import { Button, Form } from 'react-bootstrap';

class AddNewMeal extends React.Component {
  state = {
    mealName: '',
    calories: 0,
    image: '',
    quantity: 0,
    active: false
  };

  toggleActive = (event) => {
    event.preventDefault();
    this.setState({ active: !this.state.active });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { mealName, calories, image, quantity } = this.state;
    if (!mealName && !calories && !image) return;
    const newMeal = {
      name: mealName,
      calories: Number(calories),
      image,
      quantity
    };
    this.props.onMealAdd(newMeal);
    this.setState({
      mealName: '',
      calories: 0,
      image: '',
      quantity: 0,
      active: false
    });
  };

  handleNewMealChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        {this.state.active && (
          <Form onSubmit={this.handleFormSubmission}>
            <Form.Label htmlFor="new-meal-name" className="mt-2">
              Name
            </Form.Label>
            <Form.Control
              onChange={this.handleNewMealChange}
              name="mealName"
              id="new-meal-name"
              type="text"
              placeholder="Name"
              value={this.state.mealName}
              required
            />
            <Form.Label htmlFor="new-meal-calories" className="mt-2">
              Calories
            </Form.Label>
            <Form.Control
              onChange={this.handleNewMealChange}
              name="calories"
              id="new-meal-calories"
              type="number"
              placeholder="Calories"
              value={this.state.calories}
              required
            />
            <Form.Label htmlFor="new-meal-img" className="mt-2">
              Image
            </Form.Label>
            <Form.Control
              onChange={this.handleNewMealChange}
              name="image"
              id="new-meal-img"
              type="text"
              placeholder="Image"
              value={this.state.image}
              required
            />
            <Button type="submit" className="btn-success w-100 mt-2">
              Add to list
            </Button>
          </Form>
        )}

        <Button
          className={
            this.state.active
              ? 'btn-warning w-100 mt-2'
              : 'btn-secondary w-100 mt-2'
          }
          onClick={this.toggleActive}
        >
          {(this.state.active && 'Cancel') || 'Add new meal'}
        </Button>
      </>
    );
  }
}

export default AddNewMeal;
