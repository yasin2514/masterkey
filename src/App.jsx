import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      yyyy
      <Outlet />
    </div>
  );
};

export default App;
