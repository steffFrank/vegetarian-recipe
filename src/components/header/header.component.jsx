import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { links } from "../../utils/route.utils";
import { StyledHeader, StyledNav, StyledNavLink } from "./header.component.styles";

export const Header = () => {
    return (
        <StyledHeader>
            <Link to="/"><Logo /></Link>
            <StyledNav>
                <ul>
                    {links.map((link, index) => {
                        return <StyledNavLink to={link.path} key={index}>
                                <li>{link.name}</li>
                        </StyledNavLink>
                    })}
                </ul>
            </StyledNav>
        </StyledHeader>
    )
}