import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { counterActions } from "../store/counter";
const Counter = () => {
  const [customNumber, setCustomNumber] = useState(0);
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const addHandler = () => {
    dispatch(counterActions.add(customNumber));
    setCustomNumber(0);
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <div className="container bg-gray-400 w-2/5 mx-auto p-4 text-center text-white flex flex-col space-y-4 text-xl rounded-md">
      {showCounter && <div className="w-full font-semibold text-black">{counter}</div>}
      <div className="flex justify-between">
        <button className="bg-pink-800 px-8 rounded-md" onClick={decrementHandler}>
          -
        </button>
        <button className="bg-pink-800 px-8 rounded-md" onClick={addHandler}>
          Add {customNumber}
        </button>
        <button className="bg-pink-800 px-8 rounded-md" onClick={incrementHandler}>
          +
        </button>
      </div>
      <input
        type="number"
        value={customNumber}
        min="0"
        max="9999"
        onChange={(event) =>
          !event.target.value
            ? setCustomNumber(0)
            : setCustomNumber(parseInt(event.target.value))
        }
        className="w-20 self-center text-black rounded-md p-2"
      />
      <button className="bg-pink-800 px-8 w-2/5 self-center rounded-md" onClick={toggleHandler}>
        Toggle Counter
      </button>
    </div>
  );
};

export default Counter;
