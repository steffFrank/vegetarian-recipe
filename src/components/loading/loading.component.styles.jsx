import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`

export const LoadingSpinner = styled.div`
    position: absolute;
    top: 30%;
    left: 45%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 10px solid var(--primary-color);
    border-top: 10px solid var(--green-clr-light);
    animation: ${rotate} 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
`