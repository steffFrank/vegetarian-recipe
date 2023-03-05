import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink  = styled(Link)`
    position: relative;
    height: clamp(280px, 15vw, 350px);
    border-radius: 10px;
    color: #FFF;
`
export const StyledArticle = styled.article`
    position: relative;
    height: clamp(280px, 15vw, 350px);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 10;
    border-radius: 10px;
`

export const StyledImg = styled.img`
    width: 100%;
    height: clamp(280px, 15vw, 350px);
    object-fit: cover;
    border-radius: 10px;
    mix-blend-mode: darken;
    z-index: 5;
`
export const StyledDescription = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    h2 {
        width: 70%;
        font-family: "Lato", sans-serif;
        text-transform: uppercase;
    }
`