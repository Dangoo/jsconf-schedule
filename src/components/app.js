import React from 'react';
import { Session } from './session';
import { Day } from './day';

function mapEvents(event, index) {
    return (<Session key={index} {...event} />);
}

export function mapDays(day, index) {
    return (
        <Day key={index} {...day}>
            <ul className="events">
                {day.events.map(mapEvents)}
            </ul>
        </Day>
    );
}