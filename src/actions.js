export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  });
  
  export const loginFailure = (errorMessage) => ({
    type: 'LOGIN_FAILURE',
    payload: errorMessage,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });