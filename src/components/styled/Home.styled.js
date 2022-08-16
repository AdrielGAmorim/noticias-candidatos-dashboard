import styled from "styled-components";

export const StyledHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1099px) {
        flex-direction: column;
        margin-top: 6rem;
    }
`
    
export const Column = styled.div`
    display: flex;
    flex-direction: column;

    section {
        width: 30vw;
        margin: 1rem;
        border-radius: 1rem;
        text-align: center;
        background-color: ${p => p.theme.colorBackgroundPlus};
        color: ${p => p.theme.colorText};
        border: 3px solid ${p => p.theme.colorText};
        transition: all 500ms;

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