import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import "./App.scss";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Checkout />
      </div>
    </>
  );
}

export default App;
