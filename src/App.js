import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import DynamicInput from './components/DynamicInput';
import GiphyList from './components/GiphyList';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <h1>Test</h1>
            <DynamicInput />
            <GiphyList />
          </div>
        </Route>
        <Route path='/post/:id' render={({ match: { params: { id } } }) => {
          return <PostContainer id={id} />
        }}
        />
      </Switch>
    </Router>
  );
}

export default App;
