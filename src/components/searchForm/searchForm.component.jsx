import { StyledButtonSearch, StyledForm, StyledInput } from "./searchForm.component.styles"

export const SearchForm = () => {
    return (
        <StyledForm>
            <StyledInput placeholder="quinoa"/>
            <StyledButtonSearch>Search</StyledButtonSearch>
        </StyledForm>
    )
}