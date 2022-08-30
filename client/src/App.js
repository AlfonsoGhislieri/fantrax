import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import SellPlayersPage from "./pages/SellPlayersPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/sellPlayers" element={<SellPlayersPage />} />
          <Route path="*" element={<SellPlayersPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
