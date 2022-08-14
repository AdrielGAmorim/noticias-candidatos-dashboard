import styled from "styled-components";

export const StyledHome = styled.div`
    width: 100%;
    margin: 3rem auto;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 1099px) {
        flex-direction: column;
        margin: 5rem auto 0 auto;
    }
`
    
export const Column = styled.div`
    display: flex;
    flex-direction: column;

    section {
        width: 30vw;
        margin: 1rem;
        border: 3px solid rgba(0, 0, 0, .8);
        border-radius: 1rem;
        text-align: center;
        transition: all 200ms linear;

        &:hover,
        &:focus {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
        }

        h2 {
            margin: 1rem 0;
            font-size: 2rem;
        }
    }

    section::nth-child(3) {
        width: 30vw;
    }


    @media screen and (max-width: 1099px) {
        section {
            width: 90vw;
            margin: 2rem auto;
        }

        section::nth-child(3) {
            width: 90vw;
        }
    }

    @media screen and (max-width: 499px) {
        section {
            margin: 1rem auto;

            h2 {
                margin: .5rem 0;
                font-size: 1.5rem;
            }
        }
    }
`