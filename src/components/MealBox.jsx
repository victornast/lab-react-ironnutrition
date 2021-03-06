import React from 'react';
import './MealBox.scss';

class MealBox extends React.Component {
  state = {
    quantity: this.props.meal.quantity
  };

  handleQuantityChange = (event) => {
    const { value } = event.target;
    this.setState({ quantity: value });
  };

  render() {
    const meal = this.props.meal;
    return (
      <div className="media">
        <img
          src={meal.image}
          alt={meal.name}
          className="img-thumbnail mr-3 mw-25 border-0 align-self-center"
          style={{ width: '4em', height: '4em', objectFit: 'fill' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{meal.name}</h5>
          <small>{meal.calories} cal</small>
        </div>
        <form className="row align-self-center">
          <input
            onChange={this.handleQuantityChange}
            className="form-control col"
            type="number"
            value={this.state.quantity}
          />
          <button className="btn btn-primary col">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
