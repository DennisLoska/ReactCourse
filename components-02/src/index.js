// 1. importing React
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// 2. creating the components
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a className="avatar" href="/">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a className="author" href="/">
                        {faker.name.firstName()}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {faker.date.recent().toDateString()}
                        </span>
                    </div>
                    <div className="text">
                        {faker.lorem.sentence()}
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