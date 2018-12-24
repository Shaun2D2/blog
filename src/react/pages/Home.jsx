import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';

import PRESET_CARDS from '../../config/cards';
import Card from '../components/Card';

import './Home.scss';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            cards: PRESET_CARDS
        }
    }

    componentDidMount() {
        const { topics } = this.props;

        this.setState({ cards: [ ...this.state.cards, ...topics ] });
    }

    render() {
        const { cards } = this.state;

        const settings = {
            cellSpacing: 25,
            dragging: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            width: '100%',
            withoutControls: true,
        }

        return (
            <div className="container">
                <div className="home">
                    <h1 className="home__title">Deving For Humans</h1>
                    <h3 className="home__title-description">
                        A blog dedicated to making web development accessible for everyone.
                        <br />
                        Select a topic below to get started.
                    </h3>
                    <div className="home__mobile-card-grid">
                        <Carousel {...settings}>
                            {cards.map((item, index) => (
                                <Card {...item} />
                            ))}
                        </Carousel>
                    </div>

                    <div className="home__desktop-card-grid">
                        <div className="row">
                            {cards.map((item, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={`card-${index}`}>
                                    <Card {...item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    topics: state.get('topics'),
});

export default connect(
    mapStateToProps,
)(Home);
