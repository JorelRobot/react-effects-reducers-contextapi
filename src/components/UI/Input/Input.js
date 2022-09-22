import React, { useRef, useImperativeHandle } from "react";

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        /**
         * In this functions, we return an object which will be accesable
         * by other components. This object can contain variables, objects
         * or even functions
         **/
        return {
            focus: activate
        };
    });

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
                }`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;