import React from "react";
import {clockViewPropsType} from "./Clock";

export const get2DigitsString = (number: number) => number < 10 ? '0' + number : number

export const DigitalClockView: React.FC<clockViewPropsType> = ({date}) => {
    return (
        <>
            <span>{get2DigitsString(date.getHours())}</span>:
            <span>{get2DigitsString(date.getMinutes())}</span>:
            <span>{get2DigitsString(date.getSeconds())}</span>

        </>
    )
}