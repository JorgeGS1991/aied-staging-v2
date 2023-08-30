// External Libraries
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

// CSS Stylesheets
import "./App.css";
import "./css/animate.min.css";
// import "./css/owl.carousel.min.css";
import "./css/bootstrap.min.css";
import "./css/dropdown.css";
import "./css/font-awesome.min.css";
import "./css/owl.theme.default.min.css";
import "./css/cubeportfolio.min.css";
import "./css/jquery.fancybox.min.css";
// import "./rs-plugin/css/settings.css";
import "./rs-plugin/css/navigation.css";
import "./css/style.css";
import { useEffect, useState } from "react";

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
      {/* <Navbar /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
