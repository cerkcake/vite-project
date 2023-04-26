import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Nav = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="bg-gradient-to-r from-[#201d1f] to-[#3d272f] text-white">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
            <CameraRollIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Movies888
          </Typography>
          <TextField
            value={props.searchInput}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            style={{ backgroundColor: "white" }}
            onChange={(e) => props.setSearchInput(e.target.value)}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
