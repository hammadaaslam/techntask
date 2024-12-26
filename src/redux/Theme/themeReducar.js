import { CHANGE_THEME } from "./themeType"

const initialState = {
    
        mode:''


}

const ThemeReducar = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_THEME : 
            return {
                ...state,
                mode:action.payload.mode
            } 
        default : 
            return state
    }
}

export default ThemeReducar