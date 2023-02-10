import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink  = styled(Link)`
    position: relative;
    border-radius: 10px;
    color: #FFF;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
`
export const StyledArticle = styled.article`
    height: clamp(280px, 15vw, 350px);
    mix-blend-mode: darken;
`

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

export const StyledTitle = styled.h2`
    position: absolute;
    bottom: 0;
    padding: 20px 10px;
    z-index: 100;
`