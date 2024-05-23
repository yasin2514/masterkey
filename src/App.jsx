import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="border max-w-screen-xl mx-auto py-5">
        <Outlet />
      </section>
    </div>
  );
};

export default App;
