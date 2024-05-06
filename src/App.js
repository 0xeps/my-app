import logo from './logo.svg';
import './App.css';
import MySlider from './MySlider';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Name">
          STUST <code>5B0G0034 許曜丞</code> upload
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn How Not to Fail This Class
        </a>

        <section className="Work-react">

          <div>
            <h5>第1個元件</h5>
            <MySlider />
          </div>

          <div>
            <h5>第2個元件</h5>
            <MySlider />
          </div>

          <div>
            <h5>第3個元件</h5>
            <MySlider />
          </div>

        </section>

      </header>
    </div>
  );
}

export default App;
