import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';

const App = () => (
    <div>
        <div className="container">
            <h1 className="center">To Do list</h1>
            <List/>
        </div>
    </div>
);

export default App;
