import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import Works from './pages/Works';
import WorkPost from './pages/WorkPost';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/blogs' component={Blog}/>
            <Route exact path='/blog/:id' component={BlogPage} />
            <Route exact path='/works' component={Works}/>
            <Route exact path='/works/:id' component={WorkPost} />
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
