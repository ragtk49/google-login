import { googleLogout } from '@react-oauth/google'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

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

export const Profile = ({profile}) => {

    const navigate = useNavigate();

    const logOut = () => {
        googleLogout();
        navigate('/')
    }

  return (
        <LoginWrapper>
            <LoginTitle>Hello, {profile.name}!! Welcome to MY HOME PATHWAY</LoginTitle>
            <ProfileContainer>
                <ProfileImage src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="profile" />
                <ProfileName>{profile.name}</ProfileName>
                <ProfileEmail>{profile.email}</ProfileEmail>
                <LogoutButton onClick={logOut}>Logout</LogoutButton>
            </ProfileContainer>
        </LoginWrapper>
  )
}
