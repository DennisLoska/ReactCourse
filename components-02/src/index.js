// 1. importing React
import React from 'react';
import ReactDOM from 'react-dom';


// 2. creating the components
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a className="avatar" href="/">
                    <img alt="avatar" />
                </a>
                <div className="content">
                    <a className="author" href="/">
                        Matt
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        How artistic!
                    </div>
                </div>
            </div>
        </div>
    );
};

// 3. render the components
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);