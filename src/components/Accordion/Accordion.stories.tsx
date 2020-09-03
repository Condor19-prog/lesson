import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {AccordionSecret} from "./AccordionSecret";

export default {
    title: 'Accordion',
    component: AccordionSecret,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("accordion mode change event fired");

export const MenuCollapsedMode = () => <AccordionSecret titleValue={"Menu"}
                                                        collapsed={true}
                                                        onChange={callback}
                                                        items={[]}
                                                        OnClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <AccordionSecret titleValue={"Users"}
                                                           collapsed={false}
                                                           onChange={callback}
                                                           items={[
                                                               {title: 'dimych', value: 1},
                                                               {title: 'valera', value: 2},
                                                               {title: 'viktor', value: 3}
                                                           ]}
                                                           OnClick={onClickCallback}/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <AccordionSecret titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} items={[
        {title: 'dimych', value: 1},
        {title: 'valera', value: 2},
        {title: 'viktor', value: 3}
    ]}
                            OnClick={(id) => {
                                alert(`user with ID ${id} should be happy`)
                            }}/>
};
