import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { CreatorPage } from "./Pages/CreatorPage";
import { UsersPage } from "./Pages/UsersPage";

function App() {
  return (
    <Router>
      <div className="p-16 ">
        <Header />
        <div className="flex ">
          <Nav />
          <Routes>
            <Route path="/" element={<CreatorPage />} />
            <Route path="/creator" element={<CreatorPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
