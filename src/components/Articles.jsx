import React from 'react'
import { Container} from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const Articles = () => {
    return (
        <>
        <Helmet>
            <title>Articoli - La costituzione che vive</title>
        </Helmet>
        <div style={{marginTop: "12vh"}}>
            <Container style={{maxWidth: "1024px"}}>
                <h2>Articoli</h2>             
            </Container>
        </div>
        </>
    )
}

export default Articles
