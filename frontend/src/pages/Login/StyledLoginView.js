import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    max-width: 75vw;

    img {
        margin-bottom: 15vh;
        margin-top: 15vh;
    }

    .passForgot {
        margin-left: 20vw;
        color: #c9c9c9;
        text-decoration: underline;
    }

    .space {
        margin-top: 40px;
    }

    .btn {
        margin-top: 4vh;
        text-decoration: none;
    }

    a {
        text-decoration: none;
    }

    @media only screen and (max-width: 500px) {
        .passForgot {
            margin-left: 0vw;
            text-decoration: underline;
        }

        img {
            margin-left: 15vw;
        }

        .btn {
            margin-right: 0vw;
        }
    }
`;
