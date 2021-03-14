import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - La costituzione che vive</title>
            </Helmet>
            <Container style={{marginTop: "8vh"}}>
                <h1 style={{textAlign: "center"}}>Homepage</h1>
            </Container>
        </>
    )
}

export default Home
