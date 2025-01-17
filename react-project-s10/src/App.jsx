import "./App.css";
import WeathBar from "./components/WeathBar";

import "bootstrap/dist/css/bootstrap.min.css";
import WeathFooter from "./components/WeathFooter";
import WeathCards from "./components/WeathCards";


function App() {
  return (
    <>
      <WeathBar />
      <WeathCards/>
      <WeathFooter />
    </>
  );
}

export default App;
