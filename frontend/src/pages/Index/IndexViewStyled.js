import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    max-width: 75vw;

    img {
        align-self: flex-start;
        align-items: center;
        margin-top: 2vh;
    }

    p {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 600;
        line-height: 29.26px;
        color: #2f2e2e;
        margin: 0px;
        margin-bottom: 5px;
        margin-top: 4vh;
    }

    .CarrosselArea {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        width: 35vw;
        height: 45vh;
        border-radius: 6px;
        background-color: #ccc;
        border: 1px solid #000;
        color: #113cc3;
        margin-bottom: 32px;
    }

    a {
        text-decoration: none;
    }

    @media only screen and (max-width: 500px) {
        p {
            font-size: 16px;
        }
        img {
            align-self: center;
        }
    }
`;
