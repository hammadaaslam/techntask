import { CHANGE_ROLE } from "./roleType"

const initialState = {
    
        mode:''


}

const RoleReducar = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_ROLE : 
            return {
                ...state,
                mode:action.payload.mode
            } 
        default : 
            return state
    }
}

export default RoleReducar