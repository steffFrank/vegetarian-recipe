import { useRouteError } from "react-router-dom";
import { StyledSection } from "./error.styles"

export const Error = () => {
    const error = useRouteError();
    return (
        <>  
            <StyledSection>
                <h1>404</h1>
                <p>oops! something went wrong.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </StyledSection>
        </>
    )
}