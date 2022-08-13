import styled from "styled-components";

export const StyledInformation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: auto;

    section {
        height: auto;
        margin 2rem auto;
        border: 3px solid rgba(0, 0, 0, .8);
        border-radius: 1rem;
        text-align: center;

        &:hover,
        &:focus {
            box-shadow: 1px 1px 2px #323232;
        }

        h2 {
            margin: 1rem 0;
            font-size: 2rem;
        }
    }


    @media screen and (max-width: 1099px) {
        width: 100%;
        margin-top: 6rem;
    }

    @media screen and (max-width: 699px) {
        section {
            width: 90%;
    
            h2 {
                font-size: 1.5rem;
            }
        }
    }
`