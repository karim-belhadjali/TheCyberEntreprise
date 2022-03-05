import "./App.scss";
import FixedBot from "./components/fixedBottom/FixedBotComponent";
import FixedTop from "./components/header/fixedTop/FixedTopComponent";
import Container from "./components/main/ContainerComponents";

function App() {
  return (
    <>
      <FixedTop />
      <Container />
      <FixedBot />
    </>
  );
}

export default App;
