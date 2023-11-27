import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Dashboard from "./Dashboard";
import Privacy from "./Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/privacypolicy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
