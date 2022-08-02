import { Container, Wrapper, ContainerDiv, WrapperDiv } from "./navbar.styles"
import { ChatTeardropText , AddressBook, Star, Trash ,GearSix, ArrowRight} from "phosphor-react"


export const Navbar = () => {
  return(
    <Container>
      <Wrapper>
      <ContainerDiv>
      <ChatTeardropText size={42}  />
      <AddressBook size={42}  />
      <Star size={42}  />
      <Trash size={42}  />
      <GearSix size={42}  />
      </ContainerDiv>
      <WrapperDiv>
      <ArrowRight size={32} weight="fill" />
      </WrapperDiv>
    </Wrapper>
    </Container>
  )
}