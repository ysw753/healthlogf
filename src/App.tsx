import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className="flex flex-col h-screen ">
      <Header />
      <main className="mb-auto">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default App;
