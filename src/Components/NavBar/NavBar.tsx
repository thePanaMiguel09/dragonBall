import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import ManIcon from "@mui/icons-material/Man";
import GirlIcon from "@mui/icons-material/Girl";

import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // El valor actual de la navegación depende del pathname
  const [value, setValue] = useState(location.pathname);

  // Manejar el cambio de navegación
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    if (value === "/" && newValue === "/") {
      return;
    }
    setValue(newValue);
    navigate(newValue);
    console.log(newValue);
  };

  return (
    <nav className="navContainer">
      <Box className="navLinks">
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Home"
            value="/"
            className="fontFamily"
            icon={<HomeFilledIcon color="action" />}
          />
          <BottomNavigationAction
            label="Male"
            value="/filter/male"
            className="fontFamily"
            icon={<ManIcon color="action" />}
          />
          <BottomNavigationAction
            label="Female"
            value="/filter/female"
            className="fontFamily"
            icon={<GirlIcon color="action" />}
          />
        </BottomNavigation>
      </Box>
    </nav>
  );
}

export default NavBar;
