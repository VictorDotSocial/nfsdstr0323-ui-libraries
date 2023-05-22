import logo from "./logo.svg";
import "./App.css";
import BulmaCard from "./components/BulmaCard";
import BootstrapCard from "./components/BootstrapCard";
import MaterialCard from "./components/MaterialCard";
import ToastExample from "./components/ToastExample";
import StyledButton from "./components/StyledButton/StyledButton";

function App() {
  return (
    <div className="App">
      {/* <div className="columns">
        <div className="column is-one-quarter test-class">
          <h1>BulmaCard</h1>
          <BulmaCard />
        </div>
      </div> */}
      {/* <div className="test-class">
        <h1>BootstrapCard</h1>
        <BootstrapCard />
      </div> */}
      {/* <div>
        <h1>MaterialCard</h1>
        <MaterialCard />
      </div> */}
      {/* <div>
        <ToastExample />
      </div> */}
      {/* <div>
        <StyledButton bgColor="red" />
        <StyledButton bgColor="blue" />
        <StyledButton bgColor="green" />
      </div> */}
    </div>
  );
}

export default App;
