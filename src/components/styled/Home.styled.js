import styled from "styled-components";

export const StyledHome = styled.div`
    width: 100%;
    padding: 3rem auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1099px) {
        flex-direction: column;
        padding: 5rem auto;
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
        background-color: ${p => p.theme.colorBackgroundPlus};
        color: ${p => p.theme.colorText};
        transition: all 300ms;

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