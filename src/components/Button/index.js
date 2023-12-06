import React from 'react'
import "./styles.scss";

function Button(props) {
    const buttonClasses = `button ${props.disabled ? '' : (props.type ?? 'plain')}`
    return (
        <button
            {...props}
            className={buttonClasses}
            id={props.id ?? ''}
            onClick={() => props.onClick()}

        >
            {props.children}
        </button>
    )
}

export default Button