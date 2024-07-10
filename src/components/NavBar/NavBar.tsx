import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          MealTime
        </NavLink>
        <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Meals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/meals/create/newMeal" className="nav-link">
              New meal
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
