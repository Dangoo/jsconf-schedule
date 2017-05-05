import React from 'react';

function Description(props) {
    if (props.innerHTML) {
        return (
            <div className="description" dangerouslySetInnerHTML={{__html: props.innerHTML}} />
        );
    } else if (props.content) {
        return (
            <div className="description" children={props.content} />
        );
    } else {
        return null;
    }
}

function Content(props) {
    var hasDescription = Boolean(props.description || props.specialDescription);

    if (hasDescription) {
        return (
            <div>
                <a href="#" children={props.children} />
            </div>
        );
    } else {
        return <div children={props.children} />
    }
}

export function Session(props) {
    var trackID = props.trackID || '';
    return (
        <li className={`session ${trackID}`}>
            <Content {...props}>
                    <h3><span className="speaker">{props.speaker}</span> {props.title}</h3>
                    <p>
                        <time>{props.time}</time> {props.track}
                    </p>
                <Description content={props.description} innerHTML={props.specialDescription}/>
            </Content>
        </li>
    );
}