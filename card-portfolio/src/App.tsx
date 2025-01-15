import "./App.css";
import Card from "./components/Card";
import COVER from "./assets/background1.webp";
import DECOR from "./assets/decor.webp";
import CHARACTER from "./assets/popup.webp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-center">
        <Card cover={COVER} character={CHARACTER} decor={DECOR} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
