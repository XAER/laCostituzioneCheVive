import React, { useState } from 'react'
import { Container, ListGroup, Modal, Button } from 'react-bootstrap'
import { articles } from '../data/articles'
import { Helmet } from 'react-helmet'

const Articles = () => {

    const data = articles

    const [show, setShow] = useState(false);
    const [ ind, setInd ] = useState(0);

    const handleOpen = ({ index }) => {
        setShow(true);
        setInd(index)
    };
    const handleClose = () => setShow(false);
      

    // need something that returns CardColumns with MAX 3 cards inside
    const ArticlesModals = () => {
        
        return (
            
          <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title>{data[ind].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{data[ind].content.text}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
            </Modal.Footer>
          </Modal>
        );
      };

    return (
        <>
        <Helmet>
            <title>Articoli - La costituzione che vive</title>
        </Helmet>
        <div style={{marginTop: "12vh"}}>
            <ArticlesModals />
            <Container style={{maxWidth: "1024px"}}>
                <h2>Articoli</h2>
                <ListGroup>
                    {data.map((item, index) => {
                        return(
                            <ListGroup.Item action onClick={(() => handleOpen({index}))} key={index}>{item.title}, {item.author}</ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Container>
        </div>
        </>
    )
}

export default Articles
