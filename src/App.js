import { Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="overflow-x-hidden">
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
