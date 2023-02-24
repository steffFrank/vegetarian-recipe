import { StyledTable, StyledTbody, StyledThead } from "./table.component.styles"


export const Table = ({title, children}) => {
    return (
        <StyledTable>
            <StyledThead>
                <tr>
                    <th colSpan={2}>{title}</th>
                </tr>
                <tr>
                    <th>name</th>
                    <th>amount</th>
                </tr>
            </StyledThead>
            <StyledTbody>
                {children.map((child) => {
                    return (
                        <tr key={child.id}>
                            <td>{child.name}</td>
                            <td>{child.amount}</td>
                        </tr>
                    )
                })}
            </StyledTbody>
        </StyledTable>
    )
}