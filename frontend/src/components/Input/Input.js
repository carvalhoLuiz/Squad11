import React, { useState } from 'react';
import './style.css';

let input;
let label;

window.onload = function getItems() {
    input = document.getElementsByClassName('input');
    label = document.getElementsByClassName('label');
};

export default function Input(props) {
    let checkInput;

    const hiddenLabelClick = (nInput) => {
        label[nInput].classList.add('disappear');
        document.addEventListener('click', (event) => {
            const isClickInside = input[nInput].contains(event.target);

            if (!isClickInside && !checkInput) {
                label[nInput].classList.remove('disappear');
                checkInput = false;
            }
        });
    };

    const hiddenLabelChange = (a, func) => {
        let error;
        if (a.target.value) {
            checkInput = true;
        } else {
            checkInput = false;
        }
        if (func) {
            error = func(a);
        }
        if (error === true) {
            a.target.classList.add('errorTrue');
        } else {
            a.target.classList.remove('errorTrue');
        }
    };

    return (
        <div>
            <label className="label">{props.label}</label>
            <input
                className="input"
                type={props.type}
                required="required"
                onChange={(a) => hiddenLabelChange(a, props.func, props.error)}
                onClick={() => hiddenLabelClick(props.input)}
            />
            <span className="span">{props.placeHolder}</span>
        </div>
    );
}
