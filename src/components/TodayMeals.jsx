import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const TodayMeals = ({ meals, onMealRemove }) => {
  const totalCalories = meals.reduce(
    (acc, meal) => acc + meal.calories * meal.quantity,
    0
  );

  return (
    <>
      <h3 className="mt-2">Today's Meals</h3>
      <ListGroup variant="flush">
        {meals.map((meal) => (
          <ListGroup.Item
            key={meal.name}
            variant="light"
            className="p-0"
          >
            <p className="m-0 d-flex">
              <span className="align-self-center">
                {meal.quantity} — {meal.name} :{' '}
                {meal.calories * meal.quantity} cal
              </span>
              <Button
                onClick={() => onMealRemove(meal.name)}
                className="btn-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="firebrick"
                  width="1.4em"
                  height="1.4em"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </Button>
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4 className="mt-2">Total: {totalCalories} cal</h4>
    </>
  );
};

export default TodayMeals;
