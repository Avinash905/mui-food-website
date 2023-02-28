import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/mui-food-website"
          element={<Home />}
        />
        <Route
          path="/mui-food-website/menu"
          element={<Menu />}
        />
      </Routes>
    </Router>
  );
}

export default App;
