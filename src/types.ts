export interface ApiMeal {
  title: string;
  mealTime: string;
  calories: string;
}

export interface Meal {
  id: string;
  title: string;
  mealTime: string;
  calories: string;
}

export interface ApiMealsList {
  [id: string]: ApiMeal;
}
