import { lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const Header = lazy(() => import("first/Header"));

function App() {
  return (
    <>
      I am host and below is remote
      <div className="bg bg-red-600 p-4 flex items-center justify-center">
        <Header />
      </div>
    </>
  );
}

export default App;
