
import Navbar from "./component/Navbar";
import Home from "./component/HomeScreen/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./component/ProfileScreen/profile";
function App() {
  return (
    <div style={{backgroundColor:'#e4e6e6'}}>
      <Router>
      <Navbar /> 
      <div style={{marginTop:'5rem'}}>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route exact path="/profile_details/:profile_id" element={<Profile />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
