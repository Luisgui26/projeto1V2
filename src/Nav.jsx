import {} from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/"><h1>Home</h1></NavLink>
      <NavLink to="/Produtos"><h1>Produtos</h1></NavLink>
      <NavLink to="/Sobre"><h1>Sobre</h1></NavLink>
    </div>
  );
}

export default Nav;
