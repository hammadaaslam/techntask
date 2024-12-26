import { FIRST_TAB,SECOND_TAB,THIRD_TAB,FOURTH_TAB,FIVE_TAB,SIX_TAB,SEVEN_TAB,EIGTH_TAB, SECOND_TAB_TWO } from "./tabsType";

export const firsttab = (payload) => {
    // console.log("payload", payload)
    return{
        type:FIRST_TAB,
        payload:payload
    }
}

export const secondtab = (payload) => {
    
    return{
        type:SECOND_TAB,
        payload:payload
    }
}

export const secondtabtwo = (payload) => {
    return{
        type:SECOND_TAB_TWO,
        payload:payload
    }
}


export const thirdtab = (payload) => {
    return{
        type:THIRD_TAB,
        payload:payload
    }
}

export const fourthtab = (payload) => {
    return{
        type:FOURTH_TAB,
        payload:payload
    }
}

export const fivetab = (payload) => {
    return{
        type:FIVE_TAB,
        payload:payload
    }
}

export const sixtab = (payload) => {
    // console.log('payload6',payload)
    return{
        type:SIX_TAB,
        payload:payload
    }
}

export const seventab = (payload) => {
    // console.log("payload7", payload)
    return{
        type:SEVEN_TAB,
        payload:payload
    }
}

export const eigthtab = (payload) => {
    return{
        type:EIGTH_TAB,
        payload:payload
    }
}