import React from "react";
import Navbar from "./components/layout/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
      </div>
    );
  }
}

// Related to FontAwesome
library.add(fab);

export default App;
