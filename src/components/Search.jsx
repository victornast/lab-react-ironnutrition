import React from 'react';
import './Search.scss';

class Search extends React.Component {
  handleFilterChange = (event) => {
    const { value } = event.target;
    this.props.onFilterChange(value);
  };

  render() {
    return (
      <div className="search">
        <form>
          <label htmlFor="meal-filter">Meal Filter</label>
          <input
            onChange={this.handleFilterChange}
            type="text"
            placeholder="Meal name"
            value={this.props.filter}
          />
        </form>
      </div>
    );
  }
}

export default Search;
