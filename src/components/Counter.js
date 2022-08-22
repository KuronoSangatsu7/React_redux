import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { counterActions } from "../store";
const Counter = () => {
  const [customNumber, setCustomNumber] = useState(0);
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
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
    <div className="container bg-slate-800 w-2/5 mx-auto p-4 mt-12 text-white font-semibold text-center flex flex-col space-y-4 text-xl">
      {showCounter && <div className="w-full">{counter}</div>}
      <div className="flex justify-between">
        <button className="bg-pink-800 px-8" onClick={decrementHandler}>
          -
        </button>
        <button className="bg-pink-800 px-8" onClick={addHandler}>
          Add {customNumber}
        </button>
        <button className="bg-pink-800 px-8" onClick={incrementHandler}>
          +
        </button>
      </div>
      <input
        type="number"
        defaultValue={0}
        value={customNumber}
        min="0"
        max="9999"
        onChange={(event) =>
          !event.target.value
            ? setCustomNumber(0)
            : setCustomNumber(parseInt(event.target.value))
        }
        className="w-2/5 self-center text-black"
      />
      <button className="bg-pink-800 px-8" onClick={toggleHandler}>
        Toggle Counter
      </button>
    </div>
  );
};

export default Counter;
