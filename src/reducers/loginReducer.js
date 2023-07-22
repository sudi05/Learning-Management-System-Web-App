const initialState = {
    isAuthenticated: false,
    error: '',
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isAuthenticated: true, error: '' };
      case 'LOGIN_FAILURE':
        return { ...state, isAuthenticated: false, error: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, error: '' };
      default:
        return state;
    }
  };
  
  export default loginReducer;