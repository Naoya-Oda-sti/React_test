import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import React from 'react';

import Send from "./components/Send";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Get from "./components/Get";
import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/send">Send</Link>
        <br />
        <Link to="/get">Get</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/test">Test</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<Send />} />
          <Route path="/get" element={<Get />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
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
