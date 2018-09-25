const initialStateUploadImage = {
  data: [],
  success: false,
  loading: false,
  error: null
}

export default uploadImage = ( state = initialStateUploadImage, action ) => {
  switch(action.type) {
    case 'UPLOAD_IMAGE_REQUEST': {
      return {
        ...state,
        data: [],
        success: false,
        loading: true,
        error: null
      }
    }
    case 'UPLOAD_IMAGE_SUCCESS': {
      return {
        ...state,
        data: action.payload,
        success: true,
        loading: false,
        error: null
      }
    }
    case 'UPLOAD_IMAGE_FAILED': {
      return {
        ...state,
        data: [],
        success: false,
        loading: false,
        error: action.payload
      }
    }
    case 'REMOVE_STATE': {
      return {
        data: [],
        success: false,
        loading: false,
        error: null
      }
    }
    default: {
      return state
    }
  }
}