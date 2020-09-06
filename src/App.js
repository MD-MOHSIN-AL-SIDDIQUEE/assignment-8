import React from 'react';


import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetail from './Component/PostDetail/PostDetail';

function App() {

  
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/details/:id">
          <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
   


    </div>
  );
}  
export default App;
