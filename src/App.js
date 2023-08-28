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

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:site_name" content="RAISE - k12 AI Education MIT" />
        <meta
          property="og:description"
          content="Innovating learning and education in the era of AI"
        />

        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="aied-image" />
        <meta name="twitter:image" content="/images/aied-mid.png" />

        <meta property="og:image" content="/images/aied-mid.png" />
        <meta property="og:url" content="https://raise.mit.edu/" />
      </Helmet>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
