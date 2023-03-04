import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonBase } from "../../components/reusable/reusable.styles";
import { ReactComponent as CoverImg } from "../../assets/images/bg-image.svg";

export const MainStyle = styled.main`
    max-width: 600px;
    padding: 20px;
    margin: auto;
    color: white;
    background-color: #606c38;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23bc6c25' fill-opacity='0.84' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
`;

export const StyledCoverImg = styled(CoverImg)`
    display: block;
    width: min(95vw, 600px);
    height: auto;
    margin: -30px auto 10px;
`
export const TextStyle = styled.p`
    color: #fff;
    span {
        color: var(--secondary-color);
        filter: brightness(120%);
        font-weight: bold;
    }
`;
export const StyledLink = styled(Link)`
    ${ButtonBase}
`;