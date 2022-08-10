import { Container, Wrapper } from "./favoritesMessage.styles"
import { FavMessage } from "../../components/Favorites"


export const Fav = () => {
  return(
    <Container>
      <Wrapper>
        <FavMessage/>
      </Wrapper>
    </Container>
  )
}