import React from 'react';
import Form from 'react-bootstrap/Form';

class Search extends React.Component {
  handleFilterChange = (event) => {
    const { value } = event.target;
    this.props.onFilterChange(value);
  };

  render() {
    return (
      <Form className="mt-2">
        <Form.Label htmlFor="meal-filter" srOnly>
          Meal Filter
        </Form.Label>
        <Form.Control
          onChange={this.handleFilterChange}
          type="text"
          placeholder="Meal name"
          value={this.props.filter}
        />
      </Form>
    );
  }
}

export default Search;
