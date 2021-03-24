import './App.css';
import AppHeader from './components/AppHeader'
import Articles from './components/Articles';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Article from './components/Article/Article';
import AdminLogin from './components/AdminLogin/AdminLogin';
import { logoutUser } from './redux/actions/authActionCreators';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function App({ user, dispatchLogoutAction}) {
  return (
    <>
      <ToastContainer />
      <AppHeader />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/:article" component={Article} />
          <Route exact path="/admin_login" component={AdminLogin} />
      </Switch>
      <h1 style={{textAlign: "center", paddingTop: "15vh"}}>{user}</h1>
    </>
  );
}

const mapStateToProps = (state) => ({user: state.user})
const mapDispatchToProps = (dispatch) => ({
    dispatchLogoutAction: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
