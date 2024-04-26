//importing two libraries:
//1st: allows to use JSX. This will be imported in every componet or JSC file we create
import React from 'react';
//rednders the application inside the HTML
import ReactDOM from 'react-dom';
import App from './App';

//`render` takes two parameters:
ReactDOM.render(
    //HTML content to be displayed ex. h1s
    // <h1>Hello, world!</h1>,
    <App />, //<App></App>
    //HTML element used to display the HTML
    document.getElementById('app')
);