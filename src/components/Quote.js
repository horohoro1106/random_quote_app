import React from 'react';

const Quote = props=> (
    <blockquote>
        <p>{props.quote}</p>
        <cite>{props.author}</cite>
    </blockquote>
)

export default Quote;