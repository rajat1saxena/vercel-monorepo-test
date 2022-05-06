import React from 'react';

interface ButtonProps {
    caption: string;
}

export default function Button(props: ButtonProps) {
    const { caption } = props;

    const handleClick = () => {
        console.log(`${caption} was clicked!`);
    }

    return (
        <div>
            <button onClick={handleClick}>
                {props.caption}
            </button>
        </div>
    )
}