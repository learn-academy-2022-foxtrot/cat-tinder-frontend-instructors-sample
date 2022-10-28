import { render, screen } from '@testing-library/react'
import Home from './Home'

describe("<Home/>", ()=> {
    // user can see the home page
    test("renders the home page for the user", ()=> {
        // Triple A Approach:  Arrange, Act, Assert
        // Arrange - set up a condition
        render(<Home/>)
        // Act - interactions/passive
        const element = screen.getByText("It's like Tinder, but for Cats!")
        // Assert - what is expected
        expect(element).toBeInTheDocument()
    })

    test("has an image with src and alt attributes", () => {
        render(<Home />)
        // run a screen.debug to see the document object and its roles
        screen.debug(screen.getAllByRole('img'))
        // checks for the first `img` tag and all of its props
        // .getAllByRole is applicable when you are expecting more than one element to have the role. Using this method to show the technique
        const catImage = screen.getAllByRole('img')[0]
        expect(catImage).toHaveAttribute('src', 'cat-home.png')
        expect(catImage).toHaveAttribute('alt', 'fluffy gray cat with sunglasses')


    })

})
