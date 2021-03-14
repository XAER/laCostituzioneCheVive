import React from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const Article = ({ title, articleText, author, date, tags }) => {
    return (
        <Container style={{ padding: "3vh", maxWidth: "1024px", borderRadius: "2rem", backgroundColor: "#f2f2f2"}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <p style={{textAlign: "justify"}}>{articleText}</p>
            <Row style={{paddingLeft: "3vh"}}>
                <Col xs={12} md={8}>
                    <p>{author}</p>
                </Col>
                <Col className="text-muted" xs={6} md={4}>
                    <p>{date}</p> 
                </Col>
            </Row>
            <Dropdown.Divider />
            <Row className="text-muted" style={{paddingLeft: "3vh"}}>
                <p>{tags}</p>
            </Row>
        </Container>
    )
}

export default Article
