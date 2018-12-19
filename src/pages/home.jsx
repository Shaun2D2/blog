import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

import './home.scss';

const apiEndpoint = "https://code-for-humans.prismic.io/api/v2";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        const api = await Prismic.getApi(apiEndpoint);

        const response = await api.query("");

        this.setState({ loading: false, data: response.results });
    }

    render() {
        const { loading, data } = this.state;

        return (
            <div className="container">
                <div className="home">
                    <h1 className="home__title">Code For Humans</h1>
                    <h4 className="home__subtitle">Coming soon...</h4>    
                </div>
                <hr />
                {!loading && (
                    <div>
                        {PrismicDOM.RichText.asText(data[0].data.title)}
                    </div>
                )}
            </div>
        )
    }
}

export default Home;