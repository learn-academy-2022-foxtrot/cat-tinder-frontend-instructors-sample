import { render, screen } from '@testing-library/react'
import CatIndex from './CatIndex'
import mockCats from "../mockData"
import {BrowserRouter} from "react-router-dom"
describe("<CatIndex/>", ()=> {

    beforeEach(() => {
      render(
        <BrowserRouter>
          <CatIndex cats={mockCats} />
        </BrowserRouter>
        )
    })
    // user can see the CatIndex page
    test("renders the CatIndex page for the user", ()=> {
        // Triple A Approach:  Arrange, Act, Assert
        // Arrange - set up a condition
        // render(<CatIndex cats={mockCats}/>)
        console.log("cat index render")
        screen.debug()
        // Act - interactions/passive
        const element = screen.getByText("Get ready to purr at this fur!")
        screen.debug(element)
        // Assert - what is expected
        expect(element).toBeInTheDocument()
    })

    test("renders cat cards", () => {
      mockCats.forEach(cat => {
        // name
        const catName = screen.getByText(cat.name)
        expect(catName).toBeInTheDocument()
        // image
        const catImage = screen.getAllByRole('img')
        expect(catImage).toBeVisible
      })
    })

})
