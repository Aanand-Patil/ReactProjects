import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route path="/h" element={<h1>Hello world1</h1>} />
      </Routes>
    </div>
  );
}

export default App;
