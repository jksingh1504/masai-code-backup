import "./App.css";
import { Button } from "./Components/Button";
import { Pagination } from "./Components/Pagination";
import { useCounter } from "./hooks/useCounter";


function App() {
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Button.jsx and Pagination.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */
  const { count, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });
  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {count}</h3>
      <button onClick={() => incCount()}>Increment</button>
      <button onClick={() => incCount(3)}>Increment 3</button>
      <button onClick={() => decCount(2)}>Decrement 2</button>
      <button onClick={() => decCount(4)}>Decrement 4</button>

      <br /><br/><br/>
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Button colorScheme={"red"} variant={"outline"} size={"xl"} />
      <br /><br/><br/>
      <Pagination total={6} selected={3} />
    </div>
  );
}

export default App;
