import Signin from "./pages/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
