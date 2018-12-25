// 1. importing React
import React from 'react';
import ReactDOM from 'react-dom';

// 2. creating the components
const App = () => {
    return (
        <div className="ui container comments">

        </div>
    );
};

// 3. render the components
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);