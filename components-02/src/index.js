// 1. importing React
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// 2. creating the components
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} date={faker.date.recent().toDateString()} text={faker.lorem.sentence()} />
            <CommentDetail author={faker.name.firstName()} date={faker.date.recent().toDateString()} text={faker.lorem.sentence()} />
            <CommentDetail author={faker.name.firstName()} date={faker.date.recent().toDateString()} text={faker.lorem.sentence()} />
        </div>
    );
};

// 3. render the components
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);