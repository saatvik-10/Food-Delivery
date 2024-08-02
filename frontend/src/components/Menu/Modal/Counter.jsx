import { useState } from "react";
import { Button } from "../../ui/button";

const Counter = ({ prices, setCounts }) => {
  const [count, setCount] = useState(prices.map(() => 0));

  const increment = (index) => {
    const newCounts = [...count];
    newCounts[index] += 1;
    setCount(newCounts);
    // setCounts(newCounts);
  };

  const decrement = (index) => {
    const newCounts = [...count];
    newCounts[index] = newCounts[index] > 0 ? newCounts[index] - 1 : 0;
    setCount(newCounts);
    // setCounts(newCounts);
  };

  return (
    <div className="space-y-4">
      {prices.map((price, index) => (
        <div
          key={index}
          className="flex items-center justify-between font-semibold text-orange-600"
        >
          <div>{price}</div>
          <div className="flex items-center space-x-2">
            <Button
              className="bg-orange-100"
              variant="ghost"
              onClick={() => decrement(index)}
            >
              -
            </Button>
            <span>{count[index]}</span>
            <Button
              className="bg-orange-100"
              variant="ghost"
              onClick={() => increment(index)}
            >
              +
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
