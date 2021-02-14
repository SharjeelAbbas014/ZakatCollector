import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import About from "./components/About/About";

import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <SignIn path="/signin" />
        <SignUp path="/createaccount" />
      </Router>
    </div>
  );
}

export default App;
