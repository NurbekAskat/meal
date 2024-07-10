import React from 'react';
import MealItem from './MealItem';
import { Meal } from '../../types';

interface Props {
  meals: Meal[];
  deleteMeal: (id: string) => void;
}

const Meals: React.FC<Props> = ({ meals, deleteMeal }) => {
  let totalCalories: number = 0;

  meals.map((meal) => {
    totalCalories = totalCalories + parseInt(meal.calories);
  });

  return (
    <div>
      <h3>Meals</h3>
      <h4>Total calories: {totalCalories}</h4>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
          onDelete={() => deleteMeal(meal.id)}
        />
      ))}
    </div>
  );
};

export default Meals;