const initialStateConfigTime = {
  data: [],
  success: false,
  loading: false,
  error: null
}

export default configTime = (state = initialStateConfigTime, action) => {
  switch(action.type) {
    case 'SETTING_TIME_REQUEST': {
      return {
        ...state,
        data: [],
        success: false,
        loading: true,
        error: null
      }
    }
    case 'SETTING_TIME_SUCCESS': {
      return {
        ...state,
        data: action.payload,
        success: true,
        loading: false,
        error: null
      }
    }
    case 'SETTING_TIME_FAILED': {
      return {
        ...state,
        data: [],
        success: false,
        loading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}