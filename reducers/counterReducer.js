import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/types.js";

export default (state=0, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return state + 1;
        case DECREASE_COUNTER:
            return state - 1;
        default:
            return state;
    }
}