import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
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
    );
}