import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import { faGlasses, faDatabase, faBullhorn, faHeart } from '@fortawesome/free-solid-svg-icons';
import { fab, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fetchTopics } from '../redux/modules/topics';

import history from './utils/history';

import Footer from './components/Footer';
import Topic from './pages/Topic';
import About from './pages/About';
import Home from './pages/Home';
import Post from './pages/Post';

import Loader from './components/Loader';

import './Router.scss';

/**
 * lets add in font-awesome icons.
 */
library.add(
    fab, 
    faJsSquare, 
    faReact, 
    faGlasses, 
    faDatabase,
    faBullhorn,
    faHeart,
);

class App extends Component {

    constructor(props) {
        super(props);

        autobind(this);

        this.state = {
            loading: true,
        }
    }    
    
    async componentDidMount() {
        try {
            await this.props.getTopics();

            this.setState({ loading: false });
        } catch(e) {
            console.log('error detected!');
        }
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <Loader />
            );
        }

        return (
        <Router history={history}>
            <div className="animated fadeIn">
                <Route path="/" exact component={Home} />
                <Route path="/post/:id" component={Post} />
                <Route path="/topic/:id" component={Topic} />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getTopics: () => dispatch(fetchTopics())
});

export default connect(
   null,
   mapDispatchToProps 
)(App);
