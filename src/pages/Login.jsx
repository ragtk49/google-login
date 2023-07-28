import React, {useState, useEffect} from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { GuestUser } from './GuestUser';
import { Profile } from './Profile';

const Container = styled.div`

`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const LoginTitle = styled.h1`
    color: #4285F4;
`

const LoginButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #4285F4;
    color: white;
    border: none;
    margin-top: 20px;
`
const LogoutButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #DB4437;
    color: white;
    border: none;
    margin-top: 20px;
`
const Title = styled.h1`
    color: #4285F4;
`
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const ProfileName = styled.h2`

`

const ProfileEmail = styled.p`

`   


const Login = () => {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
        setUser(codeResponse);
        setIsLoggedIn(true);
      },
      onError: (error) => console.log('Login Failed:', error)
    });

    

    useEffect( () => 
      {
        if (user) 
          {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, 
                  {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                    if(res.data ) setProfile(res.data);
                    else{
                        console.log(res);
                    }
                      
                  })
                  .catch((err) => console.log(err));
          }
        }
      ,
      [ user]
    );

    if(profile && isLoggedIn){
        return(
            <Profile profile={profile}/>
        )
    }
    else{
        return(
            <GuestUser login={login}/>
        )
    }
}

export default Login;
