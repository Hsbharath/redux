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
        setGuess(0);
        const first = Math.floor(Math.random() * 50);
        const second = Math.floor(Math.random() * 50);
        setFirstNumber(first);
        setSecondNumber(second);
        setTotal(first + second);
    }

    const debounce = (func, delay) => {
        let timeoutId;
        return function(){
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        }
    }

    const handleInputChange = debounce((event) => {
        setGuess(Number(event.target.value));
    }, 1000);

    return(
        <div className='w-full h-[100vh] flex flex-col md:flex-row  items-start justify-start gap-4 p-4'>
            <div className='w-[30%] h-full flex flex-col items-center justify-start gap-4 bg-slate-700 p-4'>
                <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>
                    <p className="w-[50%] h-[150px] flex items-center justify-center bg-blue-500">{firstNumber}</p>
                    <p className="w-[50%] h-[150px] flex items-center justify-center bg-pink-50">{secondNumber}</p>
                </div>
                <button className="w-full p-6 btn bg-slate-500 text-white" onClick={generateTwoNumbers}>Generate </button>
                <input type="number" className='w-full border-2 border-slate-600 px-2 py-8' name="sum" onChange={handleInputChange} />
                {
                    guess > 0 && 
                    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                        <p className='w-full bg-amber-200 p-3'> Total : {total}</p>
                        <p className='w-full bg-red-300 p-3'> Guess : {guess}</p>
                        <p className={`w-full p-3 ${total === guess ?'bg-green-400': 'bg-red-400'}`}>{ total === guess ? 'Correct': 'Wrong'}</p>
                    </div>
                }
            </div>
        </div>
    )
};

export default AddNumbers;