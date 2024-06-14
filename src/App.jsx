import StateCompo from "./context/Counter";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Layouts/Index";
import Inicio from "./Layouts/Inicio";

function App() {
  return (
    <StateCompo>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}>
            <Route index element={<Register></Register>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
          </Route>
          <Route path="/dashboard" element={<Inicio></Inicio>}></Route>
        </Routes>
      </Router>
    </StateCompo>
  );
}

export default App;
