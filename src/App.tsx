import { Toaster } from 'sonner';
import { Signup } from "./pages/Signup";
import { Signin } from './pages/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors theme="dark"/>
      <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
