import "./index.css";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotVisible from "./Components/NotVisible";

const App = () => {
  return (
    <>
      <div className="desktop-visible">
        <Header />
        <Home />
        <Footer />
      </div>
      <div className="not-visible">
        <NotVisible />
      </div>
    </>
  );
};
export default App;
