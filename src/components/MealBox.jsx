import React from 'react';
import './MealBox.scss';

class MealBox extends React.Component {
  render() {
    return (
      <div className="media">
        <img
          src="https://i.imgur.com/eTmWoAN.png"
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">Pizza</h5>
          <small>400 cal</small>
        </div>
        <form className="row align-self-center">
          <input className="form-control col-9" type="number" value="1" />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
