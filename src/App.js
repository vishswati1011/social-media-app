import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileDetails from "./component/Profile/profile_details";
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar /> 
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route exact path="/profile_details" element={<ProfileDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
