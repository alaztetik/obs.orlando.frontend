import React from 'react';

export default function MainSection(props) {

    return (
        <div className='flex border border-orlando-gray'>
            {props.children}
        </div>
    );
}