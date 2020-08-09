import React from 'react';
import {Game} from './pages/game'

function App() {
  return (
    <div>
      <Game/>
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
