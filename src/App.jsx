import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SingleChar } from "./components/SingleChar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<SingleChar />} />
      </Routes>
    </div>
  );
}

export default App;
