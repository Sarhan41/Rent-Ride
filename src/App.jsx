import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home, Paginate,SearchResult } from "./components";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<SearchResult />} />
        <Route path="/search" element={<Home />} />
        <Route path="/page/:pageNumber" element={<Home />} />
        <Route path="/page" element={<Home />} />
      </Routes>

    </Router>
  );
}

export default App;