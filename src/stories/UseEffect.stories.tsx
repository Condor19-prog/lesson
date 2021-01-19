import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo'
}


export const Example1 = () => {
    console.log('simple effect')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = `${counter}`
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = `${counter}`
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter changed')
        document.title = `${counter}`
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter</button>
            <button onClick={() => setFake(fake + 1)}>fake</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
    }, [])

    return (
        <>
            Hello, counter: {counter} fake: {fake}
            {/*<button onClick={() => setCounter(counter + 1)}>counter</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}>fake</button>*/}
        </>
    )
}

export const Clock = () => {
    const [data, setData] = useState(new Date())
    const tick = () => setData(new Date())
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return function cleanUp() {
            clearInterval(timerId)
        }
    }, [])

    return (
        <>
            {data.toLocaleTimeString()}
        </>
    )
}