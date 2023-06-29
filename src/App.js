import "./App.css";
import BlueCard from "./components/BlueCard";
import OuterCard from "./components/OuterCard";

function App() {
  return (
    <>
      <div style={{ position: "relative", width: "70vw", height: "94vh" }}>
        <OuterCard />
        <BlueCard />
      </div>
    </>
  );
}

export default App;
