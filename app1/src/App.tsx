import { lazy } from "react";

const Header = lazy(() => import("components/Header"));

function App() {
  return <Header />;
}

export default App;
