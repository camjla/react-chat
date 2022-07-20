import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { AppRoutes } from "./routes"
import { Container, RoutesWrapper, Wrapper } from "./styles/app.styles"

export const App = () => {
  return(
    <BrowserRouter>
      <Container>
        <Wrapper>
          <Navbar />
          
          <RoutesWrapper>
            <AppRoutes />
          </RoutesWrapper>
        </Wrapper>
      </Container>
    </BrowserRouter>
  )
}