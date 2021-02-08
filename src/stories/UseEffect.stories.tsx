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

export const SetIntervalExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
        return () => clearInterval(IntervalId)
    }, [])

    return (
        <>
            Hello, counter: {counter}
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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered with' + counter)

    useEffect(() => {
        console.log('EffectOccurred ' + counter)
        return () => {
            console.log('reset' + counter)
        }
    }, [counter])
    return (
        <>
            Hello, counter: {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])

    return (
        <>
            Hello, text: {text}
        </>
    )
}
export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('timeout expired')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>
            Hello, text: {text}
        </>
    )
}