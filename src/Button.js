import React from 'react';
import './Button.css'

function Button({buttonType, clickHandler, buttonDisabled, children}) {

    return (
        <button
            type={buttonType}
            disabled={buttonDisabled}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}

export default Button;