import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

import './Home.scss';

import Card from '../components/Card';

const DATA = [
    {
        title: 'Latest',
        image: 'http://lorempixel.com/output/city-q-c-350-250-8.jpg',
        summary: 'coolest thing about stuff'
    },
    {
        title: 'About',
        image: 'http://lorempixel.com/output/city-q-c-350-250-8.jpg',
        summary: 'Who is this guy?'
    },
    {
        title: 'React',
        image: 'http://lorempixel.com/output/city-q-c-350-250-2.jpg',
        summary: 'Epic react stuff'
    },
    {
        title: 'Javascript',
        image: 'http://lorempixel.com/output/city-q-c-350-250-2.jpg',
        summary: 'Everything javascript related'
    },
    {
        title: 'Redux',
        image: 'http://lorempixel.com/output/city-q-c-350-250-2.jpg',
        summary: 'Untangle Redux like a boss'
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
                        select a topic below to get started.
                    </h3>

                    <div className="row">
                        {DATA.map((item, index) => (
                            <div className="col-sm-3" key={`card-${index}`}>
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