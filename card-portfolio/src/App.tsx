// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import COVER from "./assets/background1.webp";
// import TITLE from "./assets/dark_rider-title.png";
import CHARACTER from "./assets/background1.webp";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Card cover={COVER} character={CHARACTER} />
    </div>
  );
}

export default App;
