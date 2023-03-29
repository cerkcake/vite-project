import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Nav from "./components/Nav";

const App = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />

      <Nav />
      <Container>
        <Toolbar />
        <Box sx={{ my: 2 }}>Content Here</Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
