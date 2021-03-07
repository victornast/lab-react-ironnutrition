import React from 'react';
import { Image, Media, Form, Button } from 'react-bootstrap';

import './MealBox.scss';

class MealBox extends React.Component {
  state = {
    quantity: 1
  };

  handleQuantityChange = (event) => {
    const { value } = event.target;
    this.setState({ quantity: value });
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
          <Form className="d-flex justify-content-end">
            <Form.Control
              onChange={this.handleQuantityChange}
              className="h-auto border-0 in-mb-quantity"
              type="number"
              value={this.state.quantity}
            />
            <Button className="btn btn-primary rounded-0 in-mb-add-meal">
              +
            </Button>
          </Form>
        </Media.Body>
      </Media>
    );
  }
}

export default MealBox;
