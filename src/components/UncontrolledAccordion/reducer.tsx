// @ts-ignore
type actionType = {
    type: string
}
type collapsedType = {
    collapsed: boolean
}
export const reducer = (state: collapsedType, action: actionType): collapsedType => {
    switch (action.type) {
        case 'VARIABLE-VALUE': {
            return {...state, collapsed: !state.collapsed}
        }
    }
    return state
}