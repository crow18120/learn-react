// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import classes from './Counter.module.css';

function Counter(props) {
    const { extraValue, counterName, event } = props;

    const [count, setCount] = React.useState(extraValue);

    React.useEffect(()=> {
        console.log("Couter rendered");
    }, [count])

    const handleIncrease = () => {
        setCount(count + 1);
        event();
    }

    const handleDecrease = () => {
        setCount(count - 1);
        event();
    }

    return (
        <div className={count % 2 === 0 ? classes["text-red"] : classes["text-blue"]}>
            {counterName}
            <div>
                <button className={classes.increaseBtn} onClick={handleIncrease}>Increase</button>
                {count}
                <button className={classes.decreaseBtn} onClick={handleDecrease}>Decrease</button>
            </div>
        </div>
    );
}

export default Counter;
