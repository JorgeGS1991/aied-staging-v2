// External Libraries
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

// CSS Stylesheets
import "./App.css";
// import "./css/animate.min.css";
// import "./rs-plugin/css/settings.css";
import "./css/style.css";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Content from "./pages/Dashboard/Content/Content";

function App() {
  const [headerAppear, setHeaderAppear] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 220) {
      setHeaderAppear(true);
    } else {
      setHeaderAppear(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="App"
      data-spy="scroll"
      data-target=".navbar"
      data-offset="90"
    >
      <Helmet></Helmet>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
