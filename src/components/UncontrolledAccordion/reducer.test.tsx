// @ts-ignore
import {reducer, stateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should be true", () => {

//data
    const state: stateType = {
        collapsed: false
    }
//action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})
//expection
    expect(newState.collapsed).toBe(true);
})

test("collapsed should be false", () => {
    const state: stateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})
    expect(newState.collapsed).toBe(false)
})

test("collapsed should be ", () => {
    const state: stateType = {
        collapsed: false
    }
    expect( () => {
        reducer(state, {type: '1'} )
    } ).toThrowError();
})
