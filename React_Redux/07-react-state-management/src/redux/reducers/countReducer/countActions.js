import { DEC_COUNT, INC_COUNT } from "./countActionTypes";


export const increaseCount = (offset=1) => {
    //logic here
    return {
        type: INC_COUNT,
        payload: offset,
        moreProperties: "null"
    };
};

export const decreaseCount = (offset=1) => {
    return {
        type: DEC_COUNT,
        payload: offset
    };
};