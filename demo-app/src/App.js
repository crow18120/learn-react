// import logo from './logo.svg';
// import './App.css';
import Counter from './Counter.js'
import React from 'react';


function App() {
  const [sum, setSum] = React.useState(0);

  const increaseSum = () => {
    setSum(sum + 1);
  }

  React.useEffect(() => {
    document.title = sum
  }, [sum])

  return (
    <div className="App">
      Number of click on button: {sum}
      <Counter extraValue={1} counterName={"ABC"} event={increaseSum}/>
    </div>
  );
}

export default App;
