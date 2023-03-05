import { useParams } from "react-router-dom";
import { Dropdown } from "../../components/dropdown/dropdown.component";
import { Table } from "../../components/table/table.component";
import { useAxios } from "../../utils/fetch.utils";
import { StyledImg, StyledInstruction, StyledSection, StyledParagraph } from "./recipe.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUtensils } from "@fortawesome/free-solid-svg-icons";

export const Recipe = () => {
    const baseUrl = process.env.REACT_APP_BASEURL;
    const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
    const { id } = useParams();
    const { isLoading, data, error } = useAxios(`${baseUrl}${id}/information?${apiQuery}`);

    if (error ) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    
    return (
      isLoading ? <div>loading...</div> : 
      <StyledSection>
            <h1>{data.title}</h1>
            <StyledImg src={data.image} alt={data.title} />
            <StyledParagraph>
                <p><FontAwesomeIcon icon={faClock} /> Ready in {data.readyInMinutes} minutes </p>
                <p>{data.servings} servings <FontAwesomeIcon icon={faUtensils} /></p>
            </StyledParagraph>
            <Dropdown title="Diet">
                {data.diets.map((diet, index) => {
                return <li key={index}>{diet}</li>})}
            </Dropdown>
            <Table title="Ingredients">
                {data.extendedIngredients}
            </Table>
            <h2>Instructions</h2>
            <StyledInstruction>
               
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