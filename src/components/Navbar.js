import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { mobile } from '../responsive';


const Container =  styled.div`
    height: 60px;
    background-color: black;
    ${mobile({display: "none"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    color : white;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    color: white;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color : white;
`


const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
            </Left>
            <Center>
                <Logo>MY HOME PATHWAY</Logo>
            </Center>
            <Right>
                {!isLoggedIn && (
                <Link to="/login" style={{ textDecoration: 'none' }}>
                <MenuItem >SIGN IN</MenuItem>
                </Link>
                )}
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;