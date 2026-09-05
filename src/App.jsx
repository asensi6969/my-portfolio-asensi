import React from "react";
import Sidebar from "./Components/Sidebar";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="bg-gradient-to-l from-black via-zinc-900 to-emerald-600 flex flex-col md:flex-row min-h-screen">

      <Sidebar />

      <main className="flex-1 w-full">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/Experiences"
            element={<Experiences />}
          />

          <Route
            path="/Projects"
            element={<Projects />}
          />

          <Route
            path="/Contact"
            element={<Contact />}
          />

        </Routes>
      </main>

    </div>
  );
};

export default App;