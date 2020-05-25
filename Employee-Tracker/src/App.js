import React from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <PageHeader />
          <SearchBar />
        </div>
      </header>
    </div>
  );
}

export default App;
