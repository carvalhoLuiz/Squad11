import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28vw;
    height: 64px;
    border-radius: 10px;
    background: ${(props) => (props.primary === true ? '#6236FF' : '#fff')};
    color: ${(props) => (props.primary === false ? '#F8CA00' : '#ffe261')};
    border: ${(props) =>
        props.primary === true ? '0px' : '2px solid #6236FF'};

    :hover {
        background: ${(props) => (props.primary === true ? '#4619E5' : '#fff')};
    }

    h6 {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1.5em;
    }

    @media only screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

export const ButtonStyle1 = (props) => {
    return (
        <>
            <Style
                primary={props.primary}
                active={props.active}
                onClick={() => {
                    if (props.func) props.func();
                }}
            >
                <h6>{props.texto}</h6>
            </Style>
        </>
    );
};
