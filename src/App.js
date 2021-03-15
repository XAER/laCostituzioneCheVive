import './App.css';
import AppHeader from './components/AppHeader'
import Articles from './components/Articles';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Article from './components/Article';

function App() {
  return (
    <>
      <AppHeader />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/:article" component={Article} />
      </Switch>
    </>
  );
}

export default App;
