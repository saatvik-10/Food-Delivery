import { useState } from "react";
import { Button } from "../../ui/button";

const Counter = ({ prices }) => {
  const [count, setCount] = useState(prices.map(() => 0));

  const increment = (index) => {
    const newCounts = [...count];
    newCounts[index] += 1;
    setCount(newCounts);
  };

  const decrement = (index) => {
    const newCounts = [...count];
    newCounts[index] = newCounts[index] > 0 ? newCounts[index] - 1 : 0;
    setCount(newCounts);
  };

  // const increment2 = () => {
  //   setCount2(count2 + 1);
  // };

  // const decrement2 = () => {
  //   setCount2(count2 > 0 ? count2 - 1 : 0);
  //};

  return (
    <div className="space-y-4">
      {prices.map((price, index) => (
        <div key={index} className="flex items-center justify-between">
          <div>{price}</div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" onClick={() => decrement(index)}>
              -
            </Button>
            <span>{count[index]}</span>
            <Button variant="ghost" onClick={() => increment(index)}>
              +
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
