import MutateMeal from './containers/MutateMeal/MutateMeal';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import { useCallback, useEffect, useState } from 'react';
import { ApiMealsList, Meal } from './types';
import axiosApi from './axiosApi';

function App() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const { data: apiMeal } = await axiosApi.get<ApiMealsList | null>(
        '/meals.json',
      );

      if (!apiMeal) {
        setMeals([]);
      } else {
        const newMeals = Object.keys(apiMeal).map((id) => ({
          ...apiMeal[id],
          id,
        }));

        setMeals(newMeals);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteMeal = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this meal?')) {
      setLoading(true);
      await axiosApi.delete(`/meals/${id}.json`);
      await fetchMeals();
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchMeals();
    }
  }, [fetchMeals, location]);

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                meals={meals}
                mealsLoading={loading}
                deleteMeal={deleteMeal}
              />
            }
          />
          <Route path="/meals/:action/:id" element={<MutateMeal />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
