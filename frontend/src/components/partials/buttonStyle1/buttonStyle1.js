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
    color: #ffe261;
    border: ${(props) =>
        props.primary === true ? '0px' : '1px solid #6236FF'};

    :hover {
        background: ${(props) => (props.primary === true ? '#4619E5' : '#fff')};
    }
`;

export const ButtonStyle1 = (props) => {
    return (
        <>
            <Style primary={props.primary} active={props.active}>
                {props.texto}
            </Style>
        </>
    );
};
