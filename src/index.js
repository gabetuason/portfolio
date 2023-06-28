// responsible for rendering the main React application.
import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css'; //  imports the CSS styles universal
import App from './App'; // main component
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css framework

//  Renders the root component of the React application. It uses the ReactDOM.render() function to render the <App /> component and attach it to the DOM element 
ReactDOM.render(<App />, document.getElementById('root'));