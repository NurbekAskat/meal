import React, { useEffect, useState } from 'react';
import { ApiMeal } from '../../types';
import { NavLink } from 'react-router-dom';


interface Props {
  onSubmit: (meal: ApiMeal) => void;
  existingMeal?: ApiMeal;
}

const emptyState: ApiMeal = {
  title: '',
  mealTime: '',
  calories: '',
};

const MealForm: React.FC<Props> = ({ onSubmit, existingMeal }) => {
  const [mealMutation, setMealMutation] = useState(emptyState);

  const initialState: ApiMeal = existingMeal ? existingMeal : emptyState;

  useEffect(() => {
    setMealMutation(initialState);
  }, [initialState]);

  const changeMeal = (
    event: React.ChangeEvent<{ name: string; value: unknown }>,
  ) => {
    setMealMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit(mealMutation);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{existingMeal ? 'Edit meal' : 'Add new meal'}</h4>
      <div className="form-group">
        <label htmlFor="title">Meal time</label>
        <select
          name="title"
          id="title"
          required
          className="form-control"
          onChange={changeMeal}
          value={mealMutation.title}
        >
          <option value="breakfast">Breakfast</option>
          <option value="snack">Snack</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="mealTime">Name</label>
        <input
          type="text"
          name="mealTime"
          id="mealTime"
          className="form-control"
          onChange={changeMeal}
          value={mealMutation.mealTime}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          required
          className="form-control"
          onChange={changeMeal}
          value={mealMutation.calories}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Save
      </button>
      <button className="btn btn-danger mt-2 ms-2">
        <NavLink to={`/`} className="nav-link">
          back
        </NavLink>
      </button>
    </form>
  );
};

export default MealForm;