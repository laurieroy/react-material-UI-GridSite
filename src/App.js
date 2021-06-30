import "./App.css";
import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Footer from "./Footer";
import GridLayout from "./GridLayout";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
