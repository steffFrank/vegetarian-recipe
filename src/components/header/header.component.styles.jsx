import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--green-clr-light);
    margin-bottom: 70px;
`

export const NavStyle = styled.nav`
    ul {
        display: flex;
        justify-content: space-evenly;
        gap: 15px;
        a {
            color: var(--green-clr-light);
            &:hover {
                text-decoration: underline;
                filter: brightness(120%);
            }
        }
    }
`