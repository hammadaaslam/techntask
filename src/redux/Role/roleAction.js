import { CHANGE_ROLE } from "./roleType"

export const changerole = (payload) => {
    return{
        type:CHANGE_ROLE,
        payload:payload
    }
}