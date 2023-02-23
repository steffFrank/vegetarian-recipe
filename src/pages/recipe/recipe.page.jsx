import { useParams } from "react-router-dom";
import { Dropdown } from "../../components/dropdown/dropdown.component";
import { useAxios } from "../../utils/fetch.utils";
import { StyledImg, StyledInstruction, StyledSection } from "./recipe.styles";


export const Recipe = () => {
    const baseUrl = process.env.REACT_APP_BASEURL;
    const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
    const { id } = useParams();
    
    const { isLoading, data, error } = useAxios(`${baseUrl}${id}/information?${apiQuery}`);

    if (error) {
        return <div>error...</div>;
    }

    return (
      isLoading ? <div>loading...</div> : 
      <StyledSection>
            <h1>{data.title}</h1>
            <StyledImg src={data.image} alt={data.title} />
            
            <span>Ready in {data.readyInMinutes} minutes</span>
            <span> - {data.servings} servings</span>
            <Dropdown title="Diet">
                {data.diets.map((diet, index) => {
                return <li key={index}>{diet}</li>})}
            </Dropdown>
            <div><h2>Ingredients</h2>
                {data.extendedIngredients.map(ing => {
                return <li key={ing.id}>{ing.name} - <span>{ing.amount} {ing.unit}</span></li>
            })}</div>
            <StyledInstruction>
                <h2>Instructions</h2>
                {data.analyzedInstructions[0].steps.map(step => {
                    return (
                        <Dropdown title={`Step ${step.number}`} key={step.number}>
                            <p>{step.step}</p>
                        </Dropdown> 
                    )
                })}
            </StyledInstruction>
      </StyledSection>
    )
}