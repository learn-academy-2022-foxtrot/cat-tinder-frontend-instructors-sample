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
})
