import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const App = () => {
  const [searchInput, setSearchInput] = React.useState("");
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav searchInput={searchInput} setSearchInput={setSearchInput} />
      <Container style={{ width: "100%" }} className="bg-black">
        <Toolbar />
        <Box>
          <Home searchInput={searchInput} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
