import { CSSTransitionGroup } from 'react-transition-group'
import React from 'react';

import Loader from 'react-loaders';

import './Loader.scss';

const LoaderPage = () => (
    <CSSTransitionGroup
        transitionName="page"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
    >
        <div className="loading-page animated fadeOut">
            <Loader type="ball-grid-pulse" active color="#343a40" />
        </div>
    </CSSTransitionGroup>
);

export default LoaderPage;