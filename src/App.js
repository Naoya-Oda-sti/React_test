import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import React from 'react';

import Send from "./components/Send";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Get from "./components/Get";
import Setmenu from "./components/Setmenu";
import HomeIcon from '@mui/icons-material/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/"><HomeIcon /></Link>
        <br />
        <Link to="/send">Send</Link>
        <br />
        <Link to="/get">Get</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/setmenu">Setmenu</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<Send />} />
          <Route path="/get" element={<Get />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/setmenu" element={<Setmenu />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//       <input type="text" />
//       <button>SEND</button>
//     </div>
//     );
//   }
// }

// export default App;
