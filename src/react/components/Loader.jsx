import React from 'react';

import Loader from 'react-loaders';

import './Loader.scss';

const LoaderPage = () => (
    <div className="loading-page animated fadeOut">
        <Loader type="ball-grid-pulse" active color="#343a40" />
    </div>
);

export default LoaderPage;