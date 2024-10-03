import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Createblog from './Pages/Createblog';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<Createblog/>} path="/new" />
          <Route element={<Edit/>} path="/edit" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
