import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

import './Home.scss';

import Card from '../components/Card';

const DATA = [
    {
        title: 'Latest',
        summary: 'Latest post',
        icon: 'bullhorn',
        color: '#FEFCFB',
    },
    {
        title: 'About',
        summary: 'Who am I',
        icon: 'glasses',
        color: '#FEFCFB',
        path: '/about'
    },
    {
        title: 'React',
        summary: 'Epic React stuff',
        icon: ['fab', 'react'],
        color: '#FEFCFB',
        path: '/topic/1'
    },
    {
        title: 'Javascript',
        summary: 'Everything javascript',
        icon: ['fab', 'js-square'],
        color: '#FEFCFB',
        path: '/topic/2'
    },
    {
        title: 'Redux',
        summary: 'Redux like a boss',
        icon: 'database',
        color: '#FEFCFB',
        path: '/topic/3'
    }
]

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    render() {
        const { loading, data } = this.state;

        return (
            <div className="container">
                <div className="home">
                    <h1 className="home__title">Deving For Humans</h1>
                    <h3 className="home__title-description">
                        A blog dedicated to making web development accessible for everyone.
                        <br />
                        Select a topic below to get started.
                    </h3>

                    <div className="row">
                        {DATA.map((item, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={`card-${index}`}>
                                <Card {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;