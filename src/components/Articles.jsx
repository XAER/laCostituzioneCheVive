import React, { useState } from 'react'
import { Container, ListGroup, Modal, Button } from 'react-bootstrap'
import { articles } from '../data/articles'
import { Helmet } from 'react-helmet'
import Article from './Article'

const Articles = () => {

    const data = articles

    const [show, setShow] = useState(false);
    const [ ind, setInd ] = useState(0);

    // need something that returns CardColumns with MAX 3 cards inside

    const passProps = ({ title, author, date, text, tags }) => {
      console.log(title, author, date, text, tags)
    }

    return (
        <>
        <Helmet>
            <title>Articoli - La costituzione che vive</title>
        </Helmet>
        <div style={{marginTop: "12vh"}}>
            <Container style={{maxWidth: "1024px"}}>
                <h2>Articoli</h2>
                <ListGroup>
                    {data.map((item, index) => {
                        var LINK = "/articles/" + `${item.title}`

                        var title = item.title
                        var author = item.author
                        var date = item.date
                        var text = item.content.text
                        var tags = item.content.tags

                        return(
                            <ListGroup.Item action href={LINK} key={index} onClick={() => {passProps({ title, author, date, text, tags})}}>{item.title}, {item.author}</ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Container>
            <Article title={data[0].title} articleText={data[1].content.text} author={data[0].author} date={data[0].date} tags={data[0].content.tags[0]} />
        </div>
        </>
    )
}

export default Articles
