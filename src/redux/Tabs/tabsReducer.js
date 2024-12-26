import {
  FIRST_TAB,
  SECOND_TAB,
  THIRD_TAB,
  FOURTH_TAB,
  FIVE_TAB,
  SIX_TAB,
  SEVEN_TAB,
  EIGTH_TAB,
  SECOND_TAB_TWO,
} from './tabsType';

const initialState = {
  formone: {
    fullname: '',
    cnicno: '',
    email: '',
    phone: '',
    dob: '',
    value: '',
    nationality:'',
    resident:''
  },

  formtwo: {
    // image: false,
    // image1: false,
    // image2: false,
    // image3: false,
    // image4: false,
    // image5: false,
    // image6: false,
    // image7: false,
    // image8: false,
    // image8: false,
    // image9: false,
    // image10: false,
    // image11: false,

    income:[]
  },

  formtwotwo: {
    amount: '',
    amount1: '',
  },

  formthree: {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    // tax:[]
  },
  formfour: {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    // taxdeducted:[]
  },
  formfive: {
    // image: false,
    // image1: false,
    // image2: false,
    // image3: false,
    // image4: false,
    // image5: false,
    // image6: false,
    // image7: false,
    // image8: false,
    // image8: false,
    // image9: false,
    wealth:[]


  },
  formsix: {
    expense: '',
  },
  formseven: {
    password: '',
    pin: '',
  },
  formeigth: {},
};

const TabsReducar = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_TAB:
        // console.log('action.payload1', action.payload);
      return {
        ...state,
        formone: action.payload,
      };
      case SECOND_TAB:
        // console.log('action.payload1', action.payload);
      return {
        ...state,
        formtwo: action.payload,


      };
      case SECOND_TAB_TWO:
        // console.log('action.payload2', action.payload);
      return {
        ...state,
        formtwotwo: action.payload,
      };
      case THIRD_TAB:
        // console.log('action.payload1', action.payload);
      return {
        ...state,
        formthree: action.payload,
      };
      case FOURTH_TAB:
        // console.log('action.payload1', action.payload);
      return {
        ...state,
        formfour: action.payload,
      };
      case FIVE_TAB:
        // console.log('action.payload1', action.payload);
      return {
        ...state,
        formfive: action.payload,
      };
      case SIX_TAB:
        // console.log('action.payload6', action.payload);
      return {
        ...state,
        formsix: action.payload,
      };

    
    case SEVEN_TAB:
      // console.log('action.payload7', action.payload);
      return {
        ...state,
        formseven: action.payload,
      };
    case EIGTH_TAB:
        // console.log('action.payload7', action.payload);
        return {
          ...state,
          formeigth: action.payload,
        };

    default:
      return state;
  }
};

export default TabsReducar;
