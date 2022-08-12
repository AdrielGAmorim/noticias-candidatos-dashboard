import styled from "styled-components";

export const StyledPageNotFound = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        width: 50%;
        border-radius: 16px;
    }

    h2 {
        font-size: 2rem;
        margin: 2rem 0;
    }

    p {
        font-size: 1.5rem;
        font-weight: lighter;
    }


    @media screen and (max-width: 1099px) {
        margin: 10rem auto 0 auto;

        img {
            width: 80%;
        }
    }

    @media screen and (max-width: 499px) {
        img {
            width: 100%;
        }

        h2 {
            font-size: 1.5rem;
            margin: 2rem 0;
        }
    }
`