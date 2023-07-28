const initialState = {
    user: null,
    profile: null,
    isLoggedIn: false,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload.user,
          profile: action.payload.profile,
          isLoggedIn: true,
        };
      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          user: null,
          profile: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  