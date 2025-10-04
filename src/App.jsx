import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Code from "./components/Code";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Chikaodiri" message="Hi" emoji="👋"/>
      <Fruits />
      <ConditionalComponent />
    </div>
  );
}
export default App;
