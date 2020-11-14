import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    width: 28vw;
    height: 64px;
    border-radius: 10px;
    background: ${(props) => (props.primary === true ? '#6236FF' : '#fff')};
    color: ${(props) => (props.primary === true ? '#ffe261' : '#ccc')};
    border: ${(props) => (props.primary === true ? '0px' : '1px solid #CCC')};

    :hover {
        background: ${(props) =>
            props.primary === true && props.active === true
                ? '#4619E5'
                : '#fff'};
    }

    h6 {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1.5em;
    }

    @media only screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const ButtonStyle2 = (props) => {
    return (
        <>
            <Style primary={props.primary} active={props.active}>
                {props.texto}
            </Style>
        </>
    );
};
