import { INCREASE_COUNTER, DECREASE_COUNTER } from "./types.js"

export const increaseCounterAction = (counter) => {
    return {
        type: INCREASE_COUNTER,
        payload: counter + 1
    }
}

export const decreaseCounterAction = (counter) => {
    return {
        type: DECREASE_COUNTER,
        payload: counter - 1
    }
}