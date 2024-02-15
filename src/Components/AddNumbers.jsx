import React, { useState } from 'react';

/*
    1. Get 2 random new numbers
    2. Add the 2 numbers and get sum
    3. Compare the sum to user input
    4.If the sum is right display correct
    5. If the sum is wrong display wrong
*/

const AddNumbers = () => {

    const [ firstNumber, setFirstNumber ] = useState(0);
    const [ secondNumber, setSecondNumber ] = useState(0);
    const [ total, setTotal] = useState(0);
    const [ guess, setGuess] = useState(0);

    const generateTwoNumbers = () => {
        const first = Math.floor(Math.random() * 50);
        const second = Math.floor(Math.random() * 50);
        setFirstNumber(first);
        setSecondNumber(second);
        setTotal(first + second);
    }
    return(
        <>
            <div className='flex items-center justify-center gap-4'>
                <p className="w-16 h-16 rounded-full bg-slate-50">{firstNumber}</p>
                <p className="w-16 h-16 rounded-full bg-slate-50">{secondNumber}</p>
            </div>
            <button onClick={generateTwoNumbers}>Generate </button>
            <input type="number" name="sum" onChange={(event) => setGuess(Number(event.target.value))} />
            <p> Total : {total}</p>
            <p> Guess : {guess}</p>
            { total === guess ? 'Correct' : 'Wrong'}
        </>
    )
};

export default AddNumbers;