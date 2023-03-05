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
        <div>
            <StyledBar onClick={handleClick}>
            <h3>{title}</h3>
            <StyledIcon isOpen={isOpen}>
                <FontAwesomeIcon icon={faChevronDown} />
            </StyledIcon>  
            </StyledBar>
            {isOpen && <StyledBox>{children}</StyledBox>}
        </div>
    );
}
