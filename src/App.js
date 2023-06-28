// main App component that serves as the entry point of the application.
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer"; // It imports the required dependencies and the necessary components.

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
