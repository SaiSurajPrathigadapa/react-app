import './App.css';
import Menu from "./components/Menu";
import Widgets from "./components/Widgets";
import Playground from "./components/Playground";
import Form from "./components/Form";

function App() {
  return (
    <div className="main-container">
      <Menu />
      <Widgets />
      <Playground className="playground" />
      <Form />
    </div>
  );
}

export default App;
