import axiosApi from '../../axiosApi';
import { useNavigate, useParams } from 'react-router-dom';
import { ApiMeal } from '../../types';
import MealForm from '../../components/MealForm/MealForm';
import { useCallback, useEffect, useState } from 'react';

const initialState = {
  title: '',
  mealTime: '',
  calories: '',
};

const MutateMeal = () => {
  const navigate = useNavigate();

  const [meal, setMeal] = useState<ApiMeal>(initialState);

  const createMeal = async (meal: ApiMeal) => {
    await axiosApi.post('/meals.json', meal);
    navigate('/');
  };

  const {  id } = useParams();

  const fetchOneMeal = useCallback(async () => {
    const { data: meal } = await axiosApi.get<ApiMeal | null>(
      `/meals/${id}.json`,
    );

    if (meal !== null) {
      setMeal(meal);
    }
  }, [id]);

  const updateDish = async (meal: ApiMeal) => {
    await axiosApi.put(`/meals/${id}.json`, meal);
    navigate('/');
  };

  useEffect(() => {
    void fetchOneMeal();
  }, [fetchOneMeal]);


  return (
    <div className="row mt-2">
      <div className="col">
        {id === 'newMeal' ?
          (<MealForm onSubmit={createMeal} />) : (<MealForm onSubmit={updateDish} existingMeal={meal} />)}
      </div>
    </div>
  );
};

export default MutateMeal;