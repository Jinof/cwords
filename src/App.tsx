import React from 'react';
import {Home} from "./pages/home";

function App() {
  return (
    <div style={styles.App}>
      <Home />
    </div>
  );
}

const styles = {
  App: {
    margin: "0 auto",
    // iphone x 大小
    maxWidth: "370px",
    maxHeight: "700px"
  }
}

export default App;
