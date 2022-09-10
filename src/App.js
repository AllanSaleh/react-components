import "./App.css";
import Form from "./components/Form";
import ListOfTask from "./components/ListOfTask";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <ListOfTask />
    </div>
  );
}

export default App;
