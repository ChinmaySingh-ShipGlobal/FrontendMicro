import { lazy } from "react";

const Header = lazy(() => import("components/Header"));

function App() {
  return <Header className="border border-blue-500" />;
}

export default App;
