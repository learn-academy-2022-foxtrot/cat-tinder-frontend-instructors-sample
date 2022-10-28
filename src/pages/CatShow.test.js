import { render, screen } from "@testing-library/react"
import CatShow from "./CatShow"
import mockCats from "../mockData"
import {MemoryRouter, Route, Routes} from "react-router-dom"

describe("<CatShow />", () => {
  it("renders without crashing", () => {
    // render the show page for one cat using the MemoryRouter
    render (
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={ mockCats }/>} />
        </Routes>
      </MemoryRouter>
    )
    const showRender = screen.getByText(/sunshine/i)
    // const showRender = screen.getByText("Hobbies: sunshine and warm spots")
    // screen.debug(showRender)
    expect(showRender).toHaveTextContent("Hobbies: sunshine and warm spots")
  })
})