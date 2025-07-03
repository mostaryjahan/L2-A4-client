import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-90% container mx-auto px-4 md:px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
