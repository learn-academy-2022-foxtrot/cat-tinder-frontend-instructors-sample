import { render, screen } from '@testing-library/react'
import CatNew from './CatNew'
import {BrowserRouter} from "react-router-dom"

describe("<CatNew/>", () => {
  // Arrange
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
      )
  })

  test("renders the CatNew page for the user", () => {
    // Act
    const catNewHeading = screen.getByText(/cat new/i)
    // screen.debug(catNewHeading)

    // Assert
    expect(catNewHeading).toHaveTextContent("Cat New!")
  })

  test("has a form with entries for name, age, enjoys, and image", () => {
    const nameLabel = screen.getByText(/name/i)
    screen.debug()
    expect(nameLabel.getAttribute("for")).toEqual("name")
    
    const ageLabel = screen.getByText("Age")
    screen.debug(ageLabel)
    expect(ageLabel.getAttribute("for")).toEqual("age")

  })


})

