import { CHANGE_THEME } from "./themeType"

export const changetheme = (payload) => {
    return{
        type:CHANGE_THEME,
        payload:payload
    }
}