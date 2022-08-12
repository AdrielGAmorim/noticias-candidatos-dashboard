import styled from "styled-components";

export const PageWrapper = styled.header`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;

    @media screen and (max-width: 1099px) {
        flex-direction: column;
        overflow-y: auto;
    }

`