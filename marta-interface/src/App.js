import logo from './logo.svg';
import './App.css';
import LinesPage from "./pages/LinesPage.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index Component={Home}/>
        <Route path="/lines/:color" element={<LinesPage c/>} />
        <Route path="about" Component={About}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
