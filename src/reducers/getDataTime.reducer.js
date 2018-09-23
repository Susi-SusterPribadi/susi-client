const initialStateGetDataTime = {
  data: {},
  success: false,
  loading: false,
  error: null
}

export default getDataTime = (state = initialStateGetDataTime, action) => {
  switch(action.type) {
    case 'GET_DATA_TIME_REQUEST': {
      return {
        ...state,
        data: {},
        success: false,
        loading: true,
        error: null
      }
    }
    case 'GET_DATA_TIME_SUCCESS': {
      return {
        ...state,
        data: action.payload,
        success: true,
        loading: false,
        error: null
      }
    }
    case 'GET_DATA_TIME_FAILED': {
      return {
        ...state,
        data: {},
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