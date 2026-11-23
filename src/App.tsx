import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const greet = useQuery(api.hello.greet, { name: "Dhruba Bhattacharyya" });

  return (
    <div>
      hello world
    </div>
  );
}

export default App;
