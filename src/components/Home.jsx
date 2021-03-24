import React from 'react'
import { Container, Carousel, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - La costituzione che vive</title>
            </Helmet>
            <div className="top-section">
                <div className="left-box">
                    <Container>
                        IMMAGINE?
                    </Container>
                </div>
                <div className="right-box">
                    <Row>La costituzione che Vive</Row>
                </div>
            </div>
            <section id="center-body" className="center-body">
                <h1>Prova</h1>
            </section>
        </>
    )
}

export default Home
