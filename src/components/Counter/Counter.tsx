import React from 'react';
import { Button } from '../Button';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

const Counter = ({ count, onIncrease, onDecrease, onIncreaseBy }: CounterProps) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '50px', marginBottom: '15px' }}>{count}</h1>
      <Button variant="primary" onClick={onIncrease}>
        +1
      </Button>
      <Button variant="secondary" onClick={onDecrease}>
        -1
      </Button>
      <Button variant="outlined" onClick={() => onIncreaseBy(5)}>
        +5
      </Button>
    </div>
  );
};

export default Counter;
