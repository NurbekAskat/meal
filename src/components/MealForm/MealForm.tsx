import React, { useState } from 'react';
import { ApiMeal, MealMutation } from '../../types';


interface Props {
  onSubmit: (meal: MealMutation) => void;
  page?: ApiMeal
}

const initialState: MealMutation = {
  title: '',
  mealTime: '',
  calories: 0,
};

const MealForm: React.FC<Props> = ({ onSubmit , page }) => {
  const [mealMutation, setMealMutation] = useState<MealMutation>(initialState);

  const changeMeal = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      <h4>{page ? 'Edit dish' : 'Add new dish'}</h4>
      <div className="form-group">
        <label htmlFor="title">Name</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="form-control"
          onChange={changeMeal}
          value={mealMutation.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mealTime">Description</label>
        <textarea
          name="mealTime"
          id="mealTime"
          className="form-control"
          onChange={changeMeal}
          value={mealMutation.mealTime}
        />
      </div>
      <div className="form-group">
        <label htmlFor="calories">Image</label>
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
    </form>
  );
};

export default MealForm;