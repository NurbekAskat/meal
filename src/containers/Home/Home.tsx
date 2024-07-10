import React from 'react';
import Meals from '../../components/Meals/Meals';
import { Meal } from '../../types';
import { Box, CircularProgress } from '@mui/material';

interface Props {
  mealsLoading: boolean;
  meals: Meal[];
  deleteMeal: (id: string) => void;
}

const Home: React.FC<Props> = ({ mealsLoading, meals, deleteMeal }) => {
  return (
    <div className="row mt-2">
      <div className="col-7">
        {mealsLoading ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100px',
              width: '100%',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Meals meals={meals} deleteMeal={deleteMeal} />
        )}
      </div>
    </div>
  );
};

export default Home;
