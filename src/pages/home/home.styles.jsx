import styled from "styled-components";

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
    z-index: -10;
    
    a {
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        border-radius: 5px;
        background-color: var(--green-clr);
        padding: 5px 10px;
        text-align: center;
        align-self: center;
        &:hover {
            filter: brightness(150%);
        }
    }
`

export const TextStyle = styled.p`
    color: whitesmoke;
`
