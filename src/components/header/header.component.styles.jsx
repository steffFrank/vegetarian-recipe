import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--green-clr-light);
    margin-bottom: 40px;
`

export const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 15px;
        a {
            color: var(--green-clr-light);
            &:hover {
                text-decoration: underline;
                filter: brightness(120%);
            }
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    &.active {
        text-decoration: underline;
        filter: brightness(150%);

    }
`;