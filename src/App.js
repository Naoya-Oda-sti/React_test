import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import React from 'react';

import Send from "./components/Send";
import Home from "./components/Home";
import Getmenu from "./components/Getmenu";
import Setmenu from "./components/Setmenu";
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"><HomeIcon fontSize="large"/></Link>
          </Typography>
          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/send">Send</Link>
            &nbsp;
            <Link to="/getmenu">献立確認</Link>
            &nbsp;
            <Link to="/setmenu">献立登録</Link>
          </Typography>
        </Toolbar>
      </AppBar>
        <h1>Menu App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<Send />} />
          <Route path="/getmenu" element={<Getmenu />} />
          <Route path="/setmenu" element={<Setmenu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;