import { lazy } from "react";

import "./App.css";
const Header = lazy(() => import("app1/Header"));

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
