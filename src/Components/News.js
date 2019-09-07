import React from 'react';
import String from './Contents';

const News = (props) => {
    return (
        <div className="my-5">
            <h5 style={{ fontWeight:'bold' }}>{props.title}</h5>
            <p>
            {props.content}
            <br/>
            <a className="btn btn-outline-primary" href={props.link} target="__blank">{String.etc.more}</a>
            </p>
        </div>
    )
}

export default News;