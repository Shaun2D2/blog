import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import { faGlasses, faDatabase, faBullhorn, faHeart } from '@fortawesome/free-solid-svg-icons';
import { fab, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import history from './utils/history';
import store from '../redux/store';

import Footer from './components/Footer';
import Topic from './pages/Topic';
import About from './pages/About';
import Home from './pages/Home';
import Post from './pages/Post';

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

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/post/:id" component={Post} />
                <Route path="/topic/:id" component={Topic} />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        </Router>
    </Provider>
);

export default App;