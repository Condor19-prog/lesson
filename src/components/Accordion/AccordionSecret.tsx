import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    OnClick: (value: any) => void
}


export function AccordionSecret(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendered")
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
        />
        { !props.collapsed && <AccordionBody items={props.items}  OnClick={props.OnClick}/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange:()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={(e) => props.onChange()}> -- {props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    OnClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li onClick={() => {props.OnClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}