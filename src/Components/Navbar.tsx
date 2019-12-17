import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", text: "HOME" },
  { to: "/faq", text: "FAQ" },
  { to: "/locais", text: "LOCAIS" },
  { to: "/categorias", text: "CATEGORIAS" }
];

export const Navbar = () => {
  return (
    <nav className="navbar">
      {links.map(link => (
        <NavLink
          key={link.to}
          className="link"
          activeClassName="active"
          to={link.to}
          exact
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
};
