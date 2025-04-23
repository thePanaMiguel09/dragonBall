import React, { useState } from "react";
import "./NavBar.css";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

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
          <BottomNavigationAction label="Home" value="/" />
          <BottomNavigationAction label="Male" value="/filter/male" />
          <BottomNavigationAction label="Female" value="/filter/female" />
        </BottomNavigation>
      </Box>
    </nav>
  );
}

export default NavBar;
