import React from 'react';

export function Day(props) {
    var active = props.active ? 'active' : '';

    return(
        <div className={`day ${active}`} id={props.id}>
            {props.children}
        </div>
    );
}