import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { links } from "../../utils/route.utils";
import { HeaderStyle, NavStyle } from "./header.component.styles";

export const Header = () => {
    return (
        <HeaderStyle>
            <Link to="/"><Logo /></Link>
            <NavStyle>
                <ul>
                    {links.map((link, index) => {
                        return <NavLink to={link.path} key={index}>
                                <li>{link.name}</li>
                        </NavLink>
                    })}
                </ul>
            </NavStyle>
        </HeaderStyle>
    )
}