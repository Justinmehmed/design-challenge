import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    return (
       <Router>
           <div>
            <Switch>
               <Route path='/' component={Home} exact />
               <Route path='/about' component={About} exact />
               <Route path='/Services' component={Services} exact />
               <Route path='/Portfolio' component={Portfolio} exact />
               <Route path='/Contact' component={Contact} exact />
           </Switch>
           <Footer/>
           </div>
       </Router>
    );
}

export default App;
