import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}


function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendered")
    const [state, dispatch] = useReducer(reducer, {collapsed:  false})
    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={() => dispatch({type: 'VARIABLE-VALUE'})}
        />
        {!!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default UncontrolledAccordion;