import "../styles/AppBar.css";
import Toolbar from "@mui/material/Toolbar";
import DropdownMenu from "./Dropdown";
import React from "react";
const Header = () => {
  return (
    <div className="appBar">
      <Toolbar>
        <DropdownMenu />
      </Toolbar>
    </div>
  );
};

export default Header;
