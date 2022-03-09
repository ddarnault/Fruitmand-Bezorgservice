import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Counter from './Counter.js';
import './App.css';


function App() {
    const {register, handleSubmit} = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    function resetCounter() {
        setStrawberryCounter(0);
        setBananaCounter( 0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    const [strawberryCounter, setStrawberryCounter] = useState(0)
    const [bananaCounter, setBananaCounter] = useState(0)
    const [appleCounter, setAppleCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)

    return (
        <div>
            <Counter
                fruitName="Aardbeien"
                fruitCounter={strawberryCounter}
                setFruitCounter={setStrawberryCounter}
            >
            </Counter>

            <Counter
                fruitName="Bananen"
                fruitCounter={bananaCounter}
                setFruitCounter={setBananaCounter}
            >

            </Counter>

            <Counter
                fruitName="Appels"
                fruitCounter={appleCounter}
                setFruitCounter={setAppleCounter}
            >

            </Counter>

            <Counter
                fruitName="Kiwi's"
                fruitCounter={kiwiCounter}
                setFruitCounter={setKiwiCounter}
            >

            </Counter>
            <button
                type="button"
                onClick={resetCounter}
            >
                Reset
            </button>
            <form onSubmit={handleSubmit(onFormSubmit)}>

                <label htmlFor="details-name">
                    Voornaam:
                    <input
                        type="text"
                        {...register("name")}
                        id="details-name"
                    />
                </label>

                <label htmlFor="details-last-name">
                    Achternaam
                    <input
                        type="text"
                        {...register("last-name")}
                        id="details-last-name"
                    />
                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        {...register("age")}
                        id="details-age"
                    />
                </label>

                <label htmlFor="details-postal-code">
                    Postcode
                    <input
                        type="text"
                        {...register("postal-code")}
                        id="details-postal-code"
                    />
                </label>

                <label htmlFor="order">
                    Bezorgfrequentie
                </label>

                <select
                    {...register("option")}
                    id="op">
                    <option value="weekly">
                        Iedere week
                    </option>

                    <option value="monthly">
                        Iedere maand
                    </option>
                </select>

                <input type="radio"
                       id="day"
                       {...register("day")}
                />
                <label htmlFor="day">
                    Overdag
                </label>

                <input
                    type="radio"
                    id="evening"
                    {...register("evening")}
                />
                <label htmlFor="evening">
                    's Avonds
                </label>


                <label htmlFor="comments">
                    Opmerking
                    <textarea
                        {...register("comment")}
                        id="comments"
                        rows="4"
                        cols="40"
                    >
          </textarea>
                </label>

                <label htmlFor="terms-of-service">
                    <input
                        type="checkbox"
                        {...register("terms-of-service")}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>

                <button type="submit"
                        value="Submit"
                >
                    Verzend
                </button>
            </form>
        </div>
    );
}

export default App;
