import styled from "styled-components";

export const StyledTable = styled.table`
    border: 1px solid var(--primary-color);
    border-collapse: collapse;
    width: min(100%, 400px);
    margin: 20px auto;
    th, td {
        border: 1px solid var(--primary-color);
        text-transform: capitalize;
        padding: 10px;
    }
`;

export const StyledThead = styled.thead`
    tr {
        &:first-child th {
            background-color: var(--green-clr);
            color: var(--bg-color);
            text-transform: uppercase;
        }
        &:nth-child(2) th {
            background-color: var(--green-clr-light);
            color: var(--bg-color);
            text-align: left;
        }
    }
`;

export const StyledTbody = styled.tbody`
    tr {
        &:hover {
            background-color: var(--primary-color);
            color: var(--bg-color);
        }
    }
`