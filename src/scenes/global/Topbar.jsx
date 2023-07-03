import React from "react";
import { useContext} from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    // Box is like a div in material UI and allows in line styling but only do this if its basic if not break it out into new comps. sx is how you inline style for non compatible MUI components
    <Box display="flex" justifyContent="space-between" p={2}>
     <Box
     display="flex"
     backgroundColor={colors.primary[400]}
     borderRadius="3px"
     >
      <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Icons */}

      {/* Light/Dark Mode */}
      <Box display="flex">
      <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

      {/* Notifications Button */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

      {/* Settings Button */}
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        
      {/* Person Icon Button */}
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar