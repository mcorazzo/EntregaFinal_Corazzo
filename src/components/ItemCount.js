import { useState, useContext } from "react";
import { context } from "./Context";

function ItemCounter(props) {
  let [counter, setCounter] = useState(0);
  
  const contextValue = useContext(context);
  console.log(contextValue);

  const incrementCounter = () => {
    let newCounterValue = counter + 1;
    setCounter(newCounterValue);
    props.handleCallback(newCounterValue); // Actualizar el contador en el componente padre.
  };

  const decrementCounter = () => {
    if (counter > 0) {
      let newCounterValue = counter - 1;
      setCounter(newCounterValue);
      props.handleCallback(newCounterValue); // Actualizar el contador en el componente padre.
    }
  };

  return (
    <main className="p-2 grow">
      <div className="flex items-center mb-2">
        <button 
          className={`w-8 h-8 border rounded text-white flex items-center justify-center 
                     ${counter === 0 ? 'bg-gray-300 cursor-default' : 'bg-blue-500'}`}
          onClick={decrementCounter}
          disabled={counter === 0}
        >
          -
        </button>
        <div className="border-t border-b px-4 py-1 bg-gray-100 text-center mx-2">
          {counter}
        </div>
        <button className="w-8 h-8 border rounded bg-blue-500 text-white flex items-center justify-center" onClick={incrementCounter}>
          +
        </button>
      </div>
    </main>
  )
}

export default ItemCounter;
