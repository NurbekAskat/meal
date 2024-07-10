import React from 'react';
import { Meal } from '../../types';
import { NavLink } from 'react-router-dom';

interface Props {
  meal: Meal;
  onDelete: VoidFunction;
}

const MealItem: React.FC<Props> = ({ meal, onDelete }) => {
  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-sm-8 ps-2">
          <h5 className="card-title">{meal.title}</h5>
          <p className="card-text small">{meal.mealTime}</p>
          <p className="card-text">{meal.calories} kcal</p>
          <p className="d-flex gap-2">
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
            <NavLink to={`/meals/edit/${meal.id}`} className="nav-link">
              <button className="btn btn-primary">Edit</button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
