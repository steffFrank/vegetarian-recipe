import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { StyledBar, StyledBox, StyledIcon } from "./dropdown.component.styles";
import { useState } from "react";

export const Dropdown = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div>
            <StyledBar onClick={handleClick}>
            <h2>{title}</h2>
            <StyledIcon isOpen={isOpen} icon={faChevronDown} />  
            </StyledBar>
            <StyledBox isOpen={isOpen}>{children}</StyledBox>
        </div>
    );
}