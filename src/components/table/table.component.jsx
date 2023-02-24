import { StyledTable, StyledTbody, StyledThead } from "./table.component.styles"


export const Table = ({title, children}) => {
    return (
        <StyledTable>
            <StyledThead>
                <tr>
                    <th colSpan={3}>{title}</th>
                </tr>
                <tr>
                    <th>name</th>
                    <th>amount</th>
                    <th>unit</th>
                </tr>
            </StyledThead>
            <StyledTbody>
                {children.map((child) => {
                    return (
                        <tr key={child.id}>
                            <td>{child.name}</td>
                            <td>{child.amount}</td>
                            <td>{child.unit}</td>
                        </tr>
                    )
                })}
            </StyledTbody>
        </StyledTable>
    )
}