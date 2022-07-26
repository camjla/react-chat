import { Container, Wrapper, Content, Title, ContentContainer } from "./home.styles"
import { BalloonSvg } from "../../utils/svg"
import { ChatsTeardrop } from "phosphor-react"
import { Color } from "../../utils/colors.app"
import { Contacts } from "../../components/Contacts"



export const Home = () => {
  return(
    <Container>
      <Wrapper>
        <Contacts />
        <Content>
          <ContentContainer>
          <Title> FIFI CHAT</Title>
          <ChatsTeardrop weight="fill" size={90} color={Color.YELLOW_MAIN}/> 
          </ContentContainer>
          <p className="Description">Converse com seus amigos de forma instantânea e segura</p>
        </Content>
      </Wrapper>
    </Container>
  )
}
//chats size não precisa por no home.styles.js so se eu quiser mudar algo especifico dele.