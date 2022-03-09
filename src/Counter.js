import React from 'react';
import Button from "./Button";
import './Counter.css';


const Counter = ({fruitCounter, setFruitCounter, fruitName}) => {
    function addFruit() {
        setFruitCounter(fruitCounter + 1)
    }

    function removeFruit() {
        setFruitCounter(fruitCounter - 1)
    }

    return (
        <div>
            {fruitName}
            <Button
                buttonType="button"
                buttonDisabled={fruitCounter === 0}
                clickHandler={removeFruit}
            >
                -
            </Button>

            {fruitCounter}

            <Button
                buttonType="button"
                buttonDisabled={false}
                clickHandler={addFruit}
            >
                +
            </Button>

        </div>
    );
};

export default Counter;