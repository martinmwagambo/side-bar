import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-home"></i>
              <span className="nav-text"> Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-image"></i>
              <span className="nav-text"> Gallery</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-pen"></i>
              <span className="nav-text"> Blog</span>
            </a>
          </li>

          <li className="active">
            <a href="#">
              <i className="fa fa-envelope"></i>
              <span className="nav-text"> Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-bell"></i>
              <span className="nav-text"> Notification</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#">
              <i className="fa fa-cogs"></i>
              <span className="nav-text"> Settings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="fa-solid fa-right-from-bracket"></i>
              <span className="nav-text"> Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
