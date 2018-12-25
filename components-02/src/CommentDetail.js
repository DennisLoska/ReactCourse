import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a className="author" href="/">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.date}
                    </span>
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;