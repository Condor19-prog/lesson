import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {

    const [data, setData] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tick')
            setData(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const get2DigitsString = (number: number) => number < 10 ? '0' + number : number

    const secondsString = get2DigitsString(data.getSeconds())
    const minutesString = get2DigitsString(data.getMinutes())
    const hoursString = get2DigitsString(data.getHours())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    )
}