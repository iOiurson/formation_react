import React from 'react';
import ReactDOM from 'react-dom';

import data from './_data/pokemon.json';
import App from './classes/App';

import './index.scss';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
