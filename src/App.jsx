import "./App.css";
import Products from "./section/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
