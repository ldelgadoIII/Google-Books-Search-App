import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Search from "./pages/Search"
import Saved from  "./pages/Saved"

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Route exact path="/" component={Search} />
        <Route exact path="/books" component={Saved} />
    </div>
    </Router>
  );
}

export default App;
