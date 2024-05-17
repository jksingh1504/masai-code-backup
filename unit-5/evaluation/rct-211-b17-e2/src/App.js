import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-cy="shoe-app">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;