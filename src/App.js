import React from 'react';
import Nav from './components/nav'
import Home from './components/home'
import About from './components/about'
import NotFound from './components/notfound'
import './App.css';
import './App.dark.css';
import 'font-awesome/css/font-awesome.min.css';
import {
    Switch,
    Route,
  } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <main className="wrapper">
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
            <footer className="footer">
                <section className="container">
                </section>
            </footer>
        </main>
    </div>
  );
}

export default App;
