import logo from './logo.svg';
import './App.css';
import LinesPage from "./pages/LinesPage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={LinesPage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
