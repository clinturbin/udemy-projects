import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import Instructions from './instructions';
import InputContainer from './input-container';

let app = <div className='App'>
    <Instructions />
    <hr/>
    <InputContainer />
</div>


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
