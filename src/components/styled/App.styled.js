import styled from "styled-components";

export const PageWrapper = styled.header`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    background-color: ${p => p.theme.colorBackground};
    color: ${p => p.theme.colorText};
    transition: background 300ms;
    
    @media screen and (max-width: 1099px) {
        flex-direction: column;
        overflow-y: auto;
    }
`

export const ToggleThemeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    label {
        font-size: 1.2rem;
        font-weight: lighter;
        text-align: center;
        margin-right: 1rem;
        color: #fff;
    }
`