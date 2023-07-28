import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: #4285F4;
`
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const LoginButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #4285F4;
    color: white;
    border: none;
    margin-top: 20px;
`

export const GuestUser = ({login}) => {
  return (
        <LoginWrapper>
                     <Title>Please login to proceed</Title>
                     <LoginButton onClick={login}>Login with Google</LoginButton>
        </LoginWrapper>
  )
}
