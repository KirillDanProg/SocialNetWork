// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Messages from "./components/Dialogs/Dialogs";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper-app">
        {/* <Header /> */}
        <Navbar />
        <div className="wrapper-app__content">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
