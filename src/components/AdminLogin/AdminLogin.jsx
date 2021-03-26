import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { loginUser, logoutUser } from '../../redux/actions/authActionCreators'
import AdminDashboard from '../AdminDashboard/AdminDashboard'
import './AdminLogin.css'

const AdminLogin = ({ user, dispatchLoginAction, dispatchLogoutAction }) => {

    // setting states for admin login
    const [ password, setPassword ] = useState("")

    const [username, setUser] = useState("")
    
    const onFormSubmit = e => {
          e.preventDefault()
          if(!username || 
            username.trim() === '' ||
            username.trim().length < 3 ||
            !password ||
            password.trim() === '' ||
            password.trim().length < 8
            ){
                toast.error("Inserire Username e Password")
            }
            else {
                dispatchLoginAction(username, password, () => toast.success("Logged in successfully"),
                (message) => toast.error(`Login error: ${message}`))
            }
          setUser()
        }


    return (
        <div>
            <Container>
            { !user.isLoggedIn ?  
                <>
                <h1>Welcome</h1>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group controlId="formBasicUser">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter your user.." onChange={(e) => setUser(e.target.value)} value={username} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >Login</Button>
                </Form>
                </>
            : 
            <>
                <AdminDashboard currentUser={user} handleLogout={dispatchLogoutAction}/>
            </>
            }
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ( {
        user: state.userReducer
    })
const mapDispatchToProps = dispatch => ({
    dispatchLoginAction: (username, password, onSuccess, onError) => dispatch(loginUser({ username, password }, onSuccess, onError)),
    dispatchLogoutAction: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)
