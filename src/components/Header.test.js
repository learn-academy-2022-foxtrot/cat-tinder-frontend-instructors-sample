import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Header from './Header'

describe("<Header/>", ()=> {
    test("Header renders without error", ()=>{

        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const indexLink = screen.getByText("Meet the Cats")
        expect(indexLink).toBeInTheDocument()     
    })

    test("Header has clickable links", ()=> {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        // userEvent - test click on link works
        userEvent.click(screen.getByText("Meet the Cats"))
        expect(screen.getByText("Meet the Cats")).toBeInTheDocument()
        userEvent.click(screen.getByText("Add a New Cat"))
        expect(screen.getByText("Add a New Cat")).toBeInTheDocument()
        userEvent.click(screen.getByText("Adopt a Cat!"))
        expect(screen.getByText("Adopt a Cat!")).toBeInTheDocument()

    })

    // checks for a tag by its class name to contain some text
    test('has a Nav tag with a className as "header-nav"', () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const navTag = screen.getByText('Meet the Cats');
        screen.debug(navTag)
        expect(navTag).toHaveClass('nav-link')
    })
})
