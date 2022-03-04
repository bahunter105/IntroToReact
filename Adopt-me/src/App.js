import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1> Adopt Me </h1>
      <Pet name="Jamon" animal="dog" breed="dacshund" />
      <Pet name="Doufu" animal="dog" breed="Spanish Water Dog" />
      <Pet name="Gretta" animal="dog" breed="Giant Shnowzer" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
