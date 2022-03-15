
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
// import SearchResult from './SearchResult';

import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Banner from './Banner';

function App() {
  return (

      //  bem in minuscula 

    <div className="App">
      <Router>
        <Header/>

        <Switch>

        <Route path='/search'>
           {/* /search */}
           <SearchPage/>
          </Route>

          <Route path='/'>
            <Home/>
          </Route>
          
        </Switch>

        <Footer/>
      </Router>

    </div>
  );
}

export default App;
