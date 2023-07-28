import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from "./userRedux.js";
import axios from "axios";
import { googleLogout} from '@react-oauth/google';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, 
    {
        headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
        }
    })
    .then((res) => {
      if(res.data ) {
        dispatch(loginSuccess(res.data));
      }
      else{
          console.log(res);
      }
        
    })
    .catch((err) => console.log(err));
    
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
    dispatch(logoutStart());
    try {
      
      googleLogout();
    
      dispatch(logoutSuccess());
    } catch (error) {
      // Handle any errors that occur during the logout process
      dispatch(logoutFailure());
    }
  };