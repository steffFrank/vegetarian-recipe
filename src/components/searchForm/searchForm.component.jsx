import { useContext } from "react"
import { RecipesContext } from "../../context/recipes.context"

import { StyledButtonSearch, StyledForm, StyledInput } from "./searchForm.component.styles"

export const SearchForm = () => {
    const { inputData, handleInputData, createUrl }= useContext(RecipesContext);
        const onSubmit = event => {
            event.preventDefault();
            createUrl("", inputData);
        }

    return (
        <StyledForm >
            <StyledInput value={inputData} type="search" onChange={handleInputData} placeholder="quinoa"/>
            <StyledButtonSearch disabled={!inputData} onClick={onSubmit} type="submit">Search</StyledButtonSearch>
        </StyledForm>
    )
}