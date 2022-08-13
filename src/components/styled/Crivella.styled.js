import styled from "styled-components";

export const StyledCrivella = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1099px) {
        width: 90%;
        flex-direction: column;
        align-items: center;
        margin: 5rem auto 0 auto;
    }
`

export const ImagesSection = styled.section`
    width: 20%;
    margin: auto 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 1099px) {
        width: 100%;
        margin: 1rem;
        flex-direction: row;
    }

    @media screen and (max-width: 799px) {
        width: 100%;
        margin: 1rem;
        flex-direction: column;
    }
`

export const FloatingImg = styled.div`
    max-width: 200px;
    max-height: 200px;
    box-sizing: border-box;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    img { width: 100%; height: 100%; }

    @keyframes float {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            transform: translatey(-10px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
    }


    @media screen and (max-width: 1099px) {
        width: 100%;
        margin: 1rem;
        flex-direction: row;
    }
`

export const DataWrapper = styled.div`
    width: 100%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        font-size: 1.4rem;
        font-weight: lighter;
        margin-bottom: .5rem;
    }
`

export const StatisticsWrapper = styled.div`
    position: relative;

    p {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 2rem;
        font-weight: 700;
        transform: translate(-50%, -50%);
        text-transform: capitalize;
        color: rgba(0, 0, 0, .8);
    }

    img {
        max-width: 200px;
        max-height: 200px;
        border-radius: 50%;
        transition: transform 600ms cubic-bezier(0.8, 0.8, 0.8, 1.0);

        &:hover {
            transform: rotate(180deg);
        }
    }
`

export const NewsSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    div {
        width: 90%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }


    @media screen and (max-width: 1099px) {
        div {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        }
    }

    @media screen and (max-width: 799px) {
        div {
            grid-template-columns: 1fr;
        }
    }
`

export const NewsButton = styled.button`
    width: 400px;
    height: 12rem;
    margin: 1rem auto;
    border: 3px solid rgba(0, 0, 0, .8);
    border-radius: 1rem;
    background-color: #F9F9F9;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    transition: all 150ms cubic-bezier(0.5, 0.5, 0.5, 1.5);

    &:hover,
    &:focus {
        transform: scale(1.01);
        box-shadow: 2px 2px 3px #323232;
    }

    h3 {
        font-size: 1.5rem;
        color: rgba(0, 0, 0, .8);
    }

    p {
        font-size: 1rem;
        padding: 2px;
        margin-bottom: 0;
        box-shadow: 1px 1px 3px #323232;
        border-radius: 3px;
        text-transform: capitalize;
    }


    @media screen and (max-width: 799px) {
        width: 100%;
        height: 10rem;
        margin: 1rem auto;

        h3 {
            font-size: 1.3rem;
        }
    }
`

export const Loading = styled.img`
    width: 100px;
`