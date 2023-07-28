import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 90%;
    width: 105%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;

`
const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Landing = () => {
  return (
    <Container>
        <Wrapper>
            <ImgContainer>
                <Image src="https://meliahomes.com/wp-content/uploads/2023/01/happy-family-moving-in-Melia-Homes-January-2023.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>WELCOME TO MY HOME PATHWAY</Title>
                <Description>My Home Pathway is a web application that helps you to find your dream home. We provide you with the best home options that suit your needs. </Description>
                <Link to="/login">
                <Button>START YOUR JOURNEY</Button>
                </Link>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Landing;
