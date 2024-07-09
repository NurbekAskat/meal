import MutateMeal from './containers/MutateMeal/MutateMeal';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavLink to="/meals/create" className="nav-link">Create</NavLink>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <Routes>
        <Route path="/" element={<h4>HAHAHAAHHA </h4>} />
        <Route path="/meals/create" element={<MutateMeal />} />
      </Routes>
    </>
  );
}

export default App;
