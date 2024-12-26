import { combineReducers } from 'redux';

import RoleReducar from './Role/roleReducar';

const rootReducar = combineReducers({    
    
    role: RoleReducar,
    
})

export default rootReducar