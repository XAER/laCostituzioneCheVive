import './App.css';
import AppHeader from './components/AppHeader'
import Articles from './components/Articles';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <>
      <AppHeader />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
      </Switch>
    </>
  );
}

export default App;
