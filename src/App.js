import State from "./context";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <State>
        <Routes />
      </State>
    </div>
  );
}

export default App;
