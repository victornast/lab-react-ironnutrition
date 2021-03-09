import React from 'react';

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
          <form onSubmit={this.handleFormSubmission}>
            <label htmlFor="new-meal-name">Name</label>
            <input
              onChange={this.handleNewMealChange}
              name="mealName"
              id="new-meal-name"
              type="text"
              placeholder="Name"
              value={this.state.mealName}
              required
            />
            <label htmlFor="new-meal-calories">Calories</label>
            <input
              onChange={this.handleNewMealChange}
              name="calories"
              id="new-meal-calories"
              type="number"
              placeholder="Calories"
              value={this.state.calories}
              required
            />
            <label htmlFor="new-meal-img">Image</label>
            <input
              onChange={this.handleNewMealChange}
              name="image"
              id="new-meal-img"
              type="text"
              placeholder="Image"
              value={this.state.image}
              required
            />
            <button>Add to list</button>
          </form>
        )}

        <button onClick={this.toggleActive}>
          {(this.state.active && 'Cancel') || 'Add new meal'}
        </button>
      </>
    );
  }
}

export default AddNewMeal;
