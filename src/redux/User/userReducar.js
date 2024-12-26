import { ADD_USER,LOG_OUT } from "./userType";

const initialState = {
    
    email:'',
    password:'',
    name:'',
    token:''

}

const UserReducar = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER : 
            return {
                ...state,
                ...action.payload
            }
            case LOG_OUT:
                return {
                    ...state,
                    ...action.payload
                
            } 
        default : 
            return state
    }
}

export default UserReducar