import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

import './Home.scss';

import Card from '../components/Card';

const DATA = [
    {
        title: 'Latest',
        image: '',
        summary: 'coolest thing about stuff'
    },
    {
        title: 'About',
        image: '',
        summary: 'Who is this guy?'
    },
    {
        title: 'React',
        image: '',
        summary: 'Epic react stuff'
    },
    {
        title: 'Javascript',
        image: '',
        summary: 'Everything javascript related'
    },
    {
        title: 'Redux',
        image: '',
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
                    <p className="home__body">
                        Nulla pellentesque erat in risus rutrum consectetur. Nullam dictum quis enim vitae mollis. Maecenas ornare ultrices lobortis. Sed est lacus, porttitor ut urna placerat, vehicula porta metus. Sed a orci laoreet, faucibus ex a, varius purus. Integer euismod finibus ligula, a pharetra sapien gravida at. Mauris fringilla elit sit amet enim volutpat suscipit. Maecenas nunc orci, posuere dignissim nulla at, finibus viverra quam. Donec nunc odio, elementum vel elementum eget, semper ut sapien. Morbi sit amet aliquam dolor. Nunc rhoncus, lectus vel ornare pharetra, quam lorem elementum est, id ultrices eros nulla sit amet ante. Donec laoreet, leo quis lobortis pretium, purus est dignissim est, id placerat urna lectus at mauris. Nullam viverra lorem cursus tortor consequat, sed vulputate orci ultrices. Nulla eu imperdiet elit. Pellentesque mattis massa viverra eleifend dignissim. Ut sollicitudin enim in feugiat rutrum.
                    </p>

                    <div className="row">
                        {DATA.map((item, index) => (
                            <div className="col-sm-4" key={`card-${index}`}>
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