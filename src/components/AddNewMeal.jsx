import React from 'react';
import './AddNewMeal.scss';

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
    const newMeal = { name: mealName, calories, image, quantity };
    this.props.onMealAdd(newMeal);
  };

  handleNewMealChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="add-new-meal">
        <form onSubmit={this.toggleActive}>
          <button>{(this.state.active && 'Cancel') || 'Add new meal'}</button>
        </form>
        {this.state.active && (
          <form onSubmit={this.handleFormSubmission}>
            <label htmlFor="new-meal-name">Name</label>
            <input
              onChange={this.handleNewMealChange}
              name="mealName"
              id="new-meal-name"
              type="text"
              placeholder="Name"
              value={this.state.mealName}
            />
            <label htmlFor="new-meal-calories">Calories</label>
            <input
              onChange={this.handleNewMealChange}
              name="calories"
              id="new-meal-calories"
              type="number"
              placeholder="Calories"
              value={this.state.calories}
            />
            <label htmlFor="new-meal-img">Image</label>
            <input
              onChange={this.handleNewMealChange}
              name="image"
              id="new-meal-img"
              type="text"
              placeholder="Image"
              value={this.state.image}
            />
            <button>Add to list</button>
          </form>
        )}
      </div>
    );
  }
}

export default AddNewMeal;
