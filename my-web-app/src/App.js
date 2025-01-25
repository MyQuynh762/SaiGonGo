import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../src/components/signin"; // Adjust the import path as necessary
import Login from "../src/components/login"; // Your login component

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/login" element={<Login />} /> {/* Use element prop instead of component */}
        <Route path="/" element={<SignIn />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
}

export default App;