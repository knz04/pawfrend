import "./App.css";
import Card from "./components/Card";
import COVER from "./assets/background1.webp";
import DECOR from "./assets/decor.webp";
import CHARACTER from "./assets/popup.webp";

function App() {
  return (
    <div className="container">
      <Card cover={COVER} character={CHARACTER} decor={DECOR} />
    </div>
  );
}

export default App;
