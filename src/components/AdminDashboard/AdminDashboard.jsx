import React, { useState } from 'react'
import { Button, Row, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getArticles } from '../../redux/actions/articleActionCreators'
import { logoutUser } from '../../redux/actions/authActionCreators'
import './AdminDashboard.css'

const AdminDashboard = ({user, dispatchLogoutAction, getArticles, articles}) => {

    const [ showArticles, setShowArticle ] = useState(false)

    const handleArticlesClose = () => setShowArticle(false)
    // const handleArticlesOpen = () => setShowArticle(true)



    // modal for showing articles list
    const ArticlesList = () => {
        return(
            <Modal show={showArticles} onHide={handleArticlesClose} animation={false}>
                <Modal.Header closeButton>
                    Articles list
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleArticlesClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const postNewArticle = () => {
        console.log("TODO: Open a Modal with Input form, parse the data in a json and post the data to the database")
        


        
    }

    const fetchArticles = async () => {
        console.log("TODO: GET request to fetch articles")


        var articoli = articles

        console.log("ARTICOLI", articoli)

        setShowArticle(true)

    }

    return (
        <>
            <h2>Welcome, {user.name}</h2>
            <p className="dashboard-description">Personal admin tools</p>
            <Row>
                <Button style={{marginLeft: "1rem", backgroundColor: "#00A1FF", border: "none"}} onClick={() => fetchArticles()} >Get Article List</Button>
                <Button style={{marginLeft: "1rem", backgroundColor: "#00CC5F", border: "none"}} onClick={() => postNewArticle()} >Post a new Article</Button>
            </Row>
            <ArticlesList />
            <Button variant="secondary" onClick={dispatchLogoutAction}>Logout</Button>
        </>
    )
}

const mapStateToProps = (state) => ( {
    user: state.userReducer,
    articles: state.articlesReducer
})
const mapDispatchToProps = dispatch => ({
dispatchLogoutAction: () => dispatch(logoutUser()),
getArticles: () => dispatch(getArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
