import React from "react";

import { HeaderButton } from "./headerButton";
import { FaTh, FaSignOutAlt } from "react-icons/fa";

import logo from "assets/images/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Prefeitura Boa Vista" />

      <div>
        <HeaderButton icon={FaTh} text="Módulos" />
        <HeaderButton icon={FaSignOutAlt} text="Log Out" />
      </div>
    </header>
  );
};
