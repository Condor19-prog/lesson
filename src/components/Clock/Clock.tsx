import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: 'digital' | 'analog'
}
export type clockViewPropsType = {
    date: Date
}

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


    let view
    switch (props.mode) {
        case "analog": {
            view = <AnalogClockView date={data}/>
            break
        }
        case "digital":
        default:
            view =
                <>
                    <DigitalClockView date={data}/>
                </>
    }

    return (
        <div>
            {view}
        </div>
    )
}

