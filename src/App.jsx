import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Code from "./components/Code";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Ternary from "./components/Ternary";
import RenderComponent from "./components/RenderComponent";

function App() {
  return (
    <div className="App">
      <Hello name="Chikaodiri" message="Hi" emoji="👋"/>
      <Fruits />
      <ConditionalComponent />
      <Ternary />
      <RenderComponent />
    </div>
  );
}
export default App;
