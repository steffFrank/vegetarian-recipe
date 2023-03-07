import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { StyledBar, StyledBox, StyledIcon } from "./dropdown.component.styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Dropdown = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div data-testid="dropdown">
            <StyledBar  data-testid="bar" onClick={handleClick}>
                <h3 data-testid="title">{title}</h3>
                <StyledIcon data-testid="icon" isOpen={isOpen}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </StyledIcon>  
            </StyledBar>
            {isOpen && <StyledBox data-testid="textBox">{children}</StyledBox>}
        </div>
    );
}
