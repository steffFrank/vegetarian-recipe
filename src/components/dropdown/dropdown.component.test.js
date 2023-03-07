import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./dropdown.component";
import "../../setupTests";

describe("Dropdown component", () => {
    it("should be closed at first render", () => {
        render(<Dropdown title="test"><p>Test Text</p></Dropdown>);
        expect(screen.getByTestId("title")).toHaveTextContent("test");
        expect(screen.getByTestId("icon")).toBeInTheDocument();
        expect(screen.queryByTestId("textBox")).not.toBeInTheDocument();
    })
    it("should be open after first click on the bar", () => {
        render(<Dropdown title="test" />);
        fireEvent.click(screen.getByTestId("bar"))
        expect(screen.getByTestId("textBox")).toBeVisible();
    })
    it("should have a text inside the box when open", () => {
        render(<Dropdown title="test"><p>Test Text</p></Dropdown>);
        fireEvent.click(screen.getByTestId("bar"))
        expect(screen.getByTestId("textBox")).toBeVisible();
        expect(screen.getByTestId("textBox")).toHaveTextContent("Test Text");
    })
    it("should be close after click on the bar when open", () => {
        render(<Dropdown title="test"><div><p>Test Text</p></div></Dropdown>);
        fireEvent.click(screen.getByTestId("bar"))
        fireEvent.click(screen.getByTestId("bar"))
        expect(screen.queryByTestId("textBox")).not.toBeInTheDocument();
    })
})