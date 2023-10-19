import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import "../styles/Dropdown.css";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ color: "white" }}
        edge="start"
        aria-label="menu"
        onClick={handleMenuClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ backgroundColor: "rgba(5, 5, 5, .30)" }}
      >
        <MenuItem
          sx={{
            border: "2px solid rgba(255, 255, 255, 0.25)",
            borderRadius: "20px",
            backgroundColor: "rgba(55, 55, 55, 0.10)",

            color: "#000",
          }}
          onClick={handleClose}
          component={Link}
          to="/joseDev"
        >
          <span className="icon">🏠</span>
          <h4>Home</h4>
        </MenuItem>
        <MenuItem
          sx={{
            border: "2px solid rgba(255, 255, 255, 0.25)",
            borderRadius: "20px",
            backgroundColor: "rgba(55, 55, 55, 0.10)",

            color: "#000",
          }}
          onClick={handleClose}
          component={Link}
          to="/Timeline"
        >
          <span className="icon">🧸</span>
          <h4>About</h4>
        </MenuItem>
        <MenuItem
          sx={{
            border: "2px solid rgba(255, 255, 255, 0.25)",
            borderRadius: "20px",
            backgroundColor: "rgba(55, 55, 55, 0.10)",
            color: "#000",
          }}
          onClick={handleClose}
          component={Link}
          to="/Projects"
        >
          <span className="icon">💼</span> <h4>Projects</h4>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropdownMenu;
