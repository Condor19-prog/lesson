import React, {useState} from "react";

export default {
    title: 'UseState'
}

 const generateData = () => {
    console.log('generate data')
    return 99999999
}

export const Example1 = () => {
    console.log('example 1')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            <div>
                {counter}
            </div>
        </>
    )
}