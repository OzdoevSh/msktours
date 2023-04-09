import {render, screen} from "@testing-library/react"
import Footer from "./components/Footer/footer";
import '@testing-library/jest-dom'


test("renders learn react link",() => {
    render(<Footer />)
    const HeaderGlavnayaElem = screen.getByText(/футер/i)
    expect(HeaderGlavnayaElem).toBeInTheDocument()
})
