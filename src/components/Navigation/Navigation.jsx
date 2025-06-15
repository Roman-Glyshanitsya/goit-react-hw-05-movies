import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.navigation__container}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active__link : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? s.active__link : s.link)}
      >
        Movies
      </NavLink>
    </nav>
  );
}
