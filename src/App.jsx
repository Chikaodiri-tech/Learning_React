import Hello from "./components/Hello";
function App() {
  const seatNumbers = ["Your seat number is:",1, 4, 7]
  return (
    <div className="App">
      <Hello 
        name="Chikaodiri," 
        message="Hi there"
        emoji="👋!"
        seatNumbers= {seatNumbers}
      />
    </div>
  );
}

export default App;