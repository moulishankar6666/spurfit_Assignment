import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app-main-container">
        <div className="app-content-container">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
