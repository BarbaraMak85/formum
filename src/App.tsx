import React from "react";
import "./App.css";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";
import Nav from "./components/Nav";
import RightMenu from "./components/RightMenu";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <Nav />
      </nav>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="leftmenu">
        <LeftMenu />
      </div>
      <main className="content">
        <Main />
      </main>
      <div className="rightmenu">
        <RightMenu />
      </div>
    </div>
  );
}

export default App;
