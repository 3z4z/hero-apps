import { Outlet } from "react-router";
import "./App.css";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <Outlet />
    </>
  );
}

export default App;
