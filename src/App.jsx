import Navbar from "components/Navbar";
import Home from "./layout/Home";
import Footer from "components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "layout/About";
import Service from "layout/Service";
import { SignIn, SignUp } from "layout/Auth";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="relative overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
