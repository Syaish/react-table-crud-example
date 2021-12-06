import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              employee
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              AddEmployees
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/", "/tutorials"} element={<TutorialsList/>} />
          <Route exact path="/add" element={<AddTutorial/>} />
          <Route  path="/tutorials/:id" element={<Tutorial/>} />
        </Routes>
      </div>
    </div>
  );
}

export default (App);
