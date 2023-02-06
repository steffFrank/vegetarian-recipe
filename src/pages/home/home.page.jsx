import { MainStyle, StyledCoverImg, TextStyle } from "./home.styles";
import { StyledLink } from "./home.styles";

export const Home = () => {
    return (
        <>
        <StyledCoverImg />
        <MainStyle>
            <TextStyle>Welcome to <span>Green Eats</span>, your go-to source for delicious and   nutritious <span>vegetarian recipes</span>! We're passionate about plant-based cooking and the many benefits that come with it, from improved health to a reduced environmental footprint.
            </TextStyle>
            <TextStyle>
            Whether you're a seasoned vegetarian or just starting to explore meat-free options, we've got you covered with a wide variety of recipes to suit any taste and dietary need. From hearty mains to sweet treats, you'll find something for every meal of the day.
            </TextStyle>
            <TextStyle>
            We believe that eating well should be accessible and enjoyable for everyone,    and we strive to make our recipes simple, flavorful, and inspiring. We also believe in using whole, natural ingredients, so you can feel good about what you're putting into your body.
            </TextStyle>
            <TextStyle>
            So go and find your new favorite dish, and let us know what you think! We can't wait to share our love of plant-based cooking with you.
            </TextStyle>
            <StyledLink to="search">Find your first recipe</StyledLink>
        </MainStyle>

        </>
        
    )
}