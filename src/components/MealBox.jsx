import React from 'react';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './MealBox.scss';

class MealBox extends React.Component {
  state = {
    quantity: 1
  };

  handleQuantityChange = (event) => {
    const { value } = event.target;
    this.setState({ quantity: value });
  };

  handleFoodSubmission = (event) => {
    event.preventDefault();
    const meal = {
      name: this.props.meal.name,
      calories: this.props.meal.calories,
      quantity: this.state.quantity
    };
    this.props.onMealAdd(meal);
    this.setState({ quantity: 1 });
  };

  render() {
    const meal = this.props.meal;
    return (
      <Media className="border rounded mt-2 shadow-sm overflow-hidden">
        <Image
          src={meal.image}
          alt={meal.name}
          className="mr-3 in-mb-media-image"
        />
        <Media.Body className="align-self-stretch d-flex">
          <div className="flex-grow-1 align-self-center">
            <h5 className="mt-0 mb-1">{meal.name}</h5>
            <small>{meal.calories} cal</small>
          </div>
          <Form
            onSubmit={this.handleFoodSubmission}
            className="d-flex justify-content-end"
          >
            <Form.Control
              onChange={this.handleQuantityChange}
              className="h-auto border-0 in-mb-quantity"
              type="number"
              value={this.state.quantity}
            />
            <Button
              type="submit"
              className="btn btn-primary rounded-0 in-mb-add-meal"
            >
              +
            </Button>
          </Form>
        </Media.Body>
      </Media>
    );
  }
}

export default MealBox;
