import "./App.css";
import NavBarModule from "./Components/NavBarModule.mjs";
import TextAreaModule from "./Components/TextAreaModule.mjs";

function App() {
  return (
    <>
      <NavBarModule name="TextUtility" />
      <div className="container">
        <TextAreaModule />
      </div>
    </>
  );
}

export default App;
