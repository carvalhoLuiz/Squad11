import React from 'react';
import './style.css';

window.onload = function hiddenLabel() {
    const input = document.querySelector('.input');
    const label = document.querySelector('.label');
    let disappear = true;
    let checkInput;

    input.addEventListener('click', (x) => {
        label.classList.add('disappear');
    });

    input.addEventListener('change', (a) => {
        checkInput = a.target.value;
        if (checkInput) {
            label.classList.add('disappear');
            disappear = true;
        }
    });
    document.addEventListener('click', (event) => {
        const isClickInside = input.contains(event.target);
        if (!checkInput) {
            disappear = false;
        }

        if (!isClickInside) {
            if (disappear === false) {
                label.classList.remove('disappear');
            }
        }
    });
};

export default function Input(props) {
    return (
        <div>
            <label className="label">{props.label}</label>
            <input className="input" type={props.type} required="required" />
            <span className="span">{props.placeHolder}</span>
        </div>
    );
}
