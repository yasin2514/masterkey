import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <section className=" max-w-screen-xl mx-auto my-16 w-full ">
        <Outlet />
      </section>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
