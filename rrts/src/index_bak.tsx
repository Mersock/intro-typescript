import React, { useState } from 'react';
import ReactDom from 'react-dom';

interface AppProps {
  color?: string;
}

// function App(props: AppProps) {
//   const [counter, setCounter]: [number, Function] = useState(0);

//   function onIncrement(): void {
//     return setCounter(counter + 1);
//   }

//   function onDecrement(): void {
//     return setCounter(counter - 1);
//   }

//   return (
//     <div>
//       <button onClick={onIncrement}>Increment</button>
//       <button onClick={onDecrement}>Decrement</button>
//       {counter}
//     </div>
//   );
// }
