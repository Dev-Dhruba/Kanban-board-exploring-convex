import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const greet = useQuery(api.hello.greet, { name: "Dhruba Bhattacharyya" });

  return (
    <div className="App bg-amber-300 h-screen flex justify-center items-center">
      {greet === undefined ? (
        <div className="bg-red-300 p-5 rounded-md">Data is loading ...</div>
      ) : (
        <div className="bg-red-300 p-5 rounded-md">{greet}</div>
      )}
    </div>
  );
}

export default App;
