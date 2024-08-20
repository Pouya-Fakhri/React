import "./App.css";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <main>
      <header>
        <NavBar />
        <div className="left-part">
          <h1>Your next online bank.</h1>
          <div className="option-container">
            <div className="option">
              <h2>6X</h2>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>

            <div className="option">
              <h2>-15%</h2>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>

            <div className="option">
              <h2>3M+</h2>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
          </div>
        </div>
        <div className="right-part">
          <img src="../images/hero.png" alt="" />
        </div>
      </header>
    </main>
  );
}

export default App;
