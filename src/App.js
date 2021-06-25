//import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Screens/Main';
import Header from './Components/Header';
import SearchResult from './Screens/SearchResult';

function App() {
  /* const { summoner, puuid } = useSelector(state => state.summoner)
  console.log(summoner, puuid) */
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/result/:summoner'>
          <Header />
          <SearchResult />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
