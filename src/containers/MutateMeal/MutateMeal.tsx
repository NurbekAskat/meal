import axiosApi from '../../axiosApi';
import { useNavigate } from 'react-router-dom';
import { MealMutation } from '../../types';
import MealForm from '../../components/MealForm/MealForm';

const MutateMeal = () => {
  const navigate = useNavigate();

  const createMeal = async (meal: MealMutation) => {
    await axiosApi.post('/meals.json', meal);
    navigate('/');
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <MealForm onSubmit={createMeal} />
      </div>
    </div>
  );
};

export default MutateMeal;