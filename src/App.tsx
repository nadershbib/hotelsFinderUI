import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { HomePage } from './Routes/HomePage';
import { ReviewsPage } from './Routes/ReviewsPage';
import { UpdatePage } from './Routes/UpdatePage';

import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (

    <Provider store={store}>

    <div className="container">
        
        <Router>
           <Switch>
              <Route exact path='/' component = {HomePage} />
              <Route exact path='/:id/reviews' component = {ReviewsPage} />
              <Route exact path='/:id/update' component = {UpdatePage} />
           </Switch>
        </Router>

    </div>
    </Provider>
  );
}

export default App;
