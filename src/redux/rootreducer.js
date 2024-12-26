import { combineReducers } from 'redux';
import TabsReducar from './Tabs/tabsReducer';

import UserReducar from './User/userReducar';
import ThemeReducar from './Theme/themeReducar';
import CartReducar from './Product/productsReducer';

const rootReducar = combineReducers({    
    user:UserReducar,
    tab:TabsReducar,
    theme: ThemeReducar,
    cart:CartReducar
})

export default rootReducar