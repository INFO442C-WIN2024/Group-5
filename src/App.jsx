import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Friends from "./Friends";
import Profile from "./Profile";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
