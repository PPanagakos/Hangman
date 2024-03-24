import React from "react";
import "./App.css";
import { ViewProvider } from "./contexts/ViewContext";
import Main from "./components/menus/Main";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <ViewProvider>
      <GameProvider>
        <div className="background-container">
          <Main />
        </div>
      </GameProvider>
    </ViewProvider>
  );
}

export default App;
