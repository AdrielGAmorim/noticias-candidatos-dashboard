import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Navbar = styled.nav`
    height: 100%;
    width: 300px;
    background-color: rgba(0, 0, 0, .8);
    text-align: center;
    transition: 1s ease;
    display: flex;
    justify-content: center;
    z-index: 2;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;

        li {
            margin-block: 3rem;
        }
    }

    @media screen and (max-width: 1099px) {
        min-width: 100%;
        height: 100vh;
        position: fixed;
        top: -300%;
        background-color: rgba(0, 0, 0, .95);
        text-align: center;
        transition: 200ms ease;
        
        &.active {
            top: 0;
            transition: 1s ease;
        }

        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            li {
                margin-block: 2rem;
            }
        }
    }
`

export const Logo = styled.div`
    position: absolute;
    top: 1rem;
    left: 2rem;
    text-align: center;
    z-index: 3;
    
    a {
        text-decoration: none;
        color: #F9F9F9;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 1px 1px 0 rgba(255, 255, 255, .6);
    }

    span {
        font-size: .8rem;
        font-weight: lighter;
    }

    img {
        width: 2.5rem;
    }


    @media screen and (max-width: 1099px) {
        top: 1rem;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, 0);
        
        a {
            text-decoration: none;
            color: #F9F9F9;
            font-size: 1rem;
            font-weight: bold;
            text-shadow: 1px 1px 0 rgba(255, 255, 255, .6);
        }

        span {
            font-size: .8rem;
        }

        img {
            width: 3.5rem;
            margin-right: 2rem;
        }
    }


    @media screen and (max-width: 599px) {
        img {
            display: none;
        }
    }

`

export const StyledActiveLink = styled(NavLink)`
    text-decoration: none;
    color: #E5E5E5;
    font-size: 1.5rem;
    font-weight: bold;
    padding: .5rem 3rem;
    border-radius: .5rem;
    transition: all 300ms cubic-bezier(0.5, 0.5, 0.5, 1.5);

    &:hover,
    &:focus {
        background-color: rgba(0, 0, 0, .2);
        box-shadow: -1px -1px 2px silver;
    }

    &.active {
        background-color: rgba(0, 0, 0, .2);
        box-shadow: 1px 1px 2px silver;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, .6);
        color: #5491CB;
    }

    &:active {
        box-shadow: 2px 2px 2px silver;
    }
`

export const MenuIconWrapper = styled.div`
    display: none;

    @media screen and (max-width: 1099px) {
        width: 100%;
        display: block;
        position: fixed;
        padding: 1rem 0 .5rem 1.5rem;
        background-color: rgba( 0, 0, 0, .8);
        color: #F9F9F9;
        z-index: 2;
        
        svg {
            cursor: pointer;
            font-size: 4rem;
            box-shadow: -1px -1px 2px silver;
            border-radius: 8px;


            &:hover {
                background-color: rgba(255, 255, 255, .1);
            }

            &:active {
                box-shadow: 1px 2px 2px silver;
            }
        }
    }
    

    @media screen and (max-width: 399px) {
        padding: 1rem 0 1rem 1rem;

        svg {
            font-size: 3rem;
        }
    }
`
    
export const Closed = styled.div`
   display: none;

    @media screen and (max-width: 1099px) {
        width: 3rem;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 3%;
        left: 3%;
        cursor: pointer;
        color: #F9F9F9;
        border-radius: 8px;
        box-shadow: -1px -1px 2px silver;
        
        &:hover,
        &focus {
            background-color: rgba(255, 255, 255, .1);
        }

        &:active {
            box-shadow: 1px 2px 2px silver;
        }

        svg {
            font-size: 3rem;
        }
    }
    
`
