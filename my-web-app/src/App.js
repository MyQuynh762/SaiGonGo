import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../src/components/signin"; // Adjust the import path as necessary
import Login from "../src/components/login"; // Your login component
import ForgotPassword from "../src/components/forgotPassword";
import Home from "./components/home";

function App() {
  return (
  //   <Router>
  //   <Routes>
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/forgotPassword" element={<ForgotPassword />} />
  //     <Route path="/signin" element={<SignIn />} />
  //     <Route path="/" element={<Home />} /> Adjust as needed
  //   </Routes>
  // </Router>
  <Home/>
      
  );
}

export default App;