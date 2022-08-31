import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import SellPlayersPage from "./pages/SellPlayersPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/sellPlayers" element={<SellPlayersPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
