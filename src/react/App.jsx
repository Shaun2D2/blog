import React from 'react';
import Home from './pages/Home';

import { faGlasses, faDatabase, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

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
);

const App = () => (
    <Home />
);

export default App;