import { useContext } from "react";
import { RecipesContext } from "../../context/recipes.context";
import { StyledButtonSearch, StyledForm, StyledInput, StyledButtonIcon, StyledButtonText } from "./searchForm.component.styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchForm = () => {
    const { inputData, getRecipesFromInput, handleInputData }= useContext(RecipesContext);
    const onSubmit = event => {
        event.preventDefault();
        getRecipesFromInput();
    }
    
    return (
        <StyledForm >
            <StyledInput value={inputData} type="search" onChange={handleInputData} placeholder="e.g quinoa"/>
            <StyledButtonSearch disabled={!inputData} onClick={onSubmit} type="submit">
                <StyledButtonText>search</StyledButtonText>
                <StyledButtonIcon icon={faSearch} />
                </StyledButtonSearch>
        </StyledForm>
    )
}
