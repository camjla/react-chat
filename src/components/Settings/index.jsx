import { Container, Wrapper, Title, Hr, Column, Subtitle, Description, Group, Content, Header, HeaderText, Name, Status, HeaderGroup} from "./settings.styles"
import { Color } from '../../utils/colors.app'
import {UsersThree, LockKey, BellSimpleRinging, QrCode, Globe, Info } from 'phosphor-react';
import eu from '../../assets/icons/eu.jpg'

export const Settings = () => {
  return(
    <Container>
      <Wrapper>
        <Title>Configurações</Title>
      <Column>
    <Header>
      <HeaderGroup>
       <img height='70px'  width='70px' src={eu} alt='eu' />
      <HeaderText>
      <Name>Camila</Name>
      <Status>hard times</Status>
      </HeaderText>
      </HeaderGroup>
    <QrCode size={35} color= {Color.BLUE_LIGHT} />
    </Header>
        <Hr />
         <Content>
        <LockKey size={35} color= {Color.BLUE_LIGHT} />
        <Group>
         <Subtitle>Privacidade</Subtitle>
         <Description>Bloqueio de contatos, vistos por último, bloqueios de pessoas</Description>
         </Group>
         </Content>

         <Content>
        <BellSimpleRinging size={35} color= {Color.BLUE_LIGHT}/>
         <Group>
        <Subtitle>Notificações</Subtitle>
        <Description>Mensagens, grupos, chamadas</Description>
        </Group>
        </Content>

        <Content>
        <Globe size={35} color= {Color.BLUE_LIGHT}/>
        <Group>
        <Subtitle>Idioma do Aplicativo</Subtitle>
        <Description>Português (Brasil)</Description>
        </Group>
        </Content>

        <Content>
        <Info size={35} color= {Color.BLUE_LIGHT} />
        <Group>
        <Subtitle> Informações</Subtitle>
        <Description> Central de informações e política de privacidade</Description>
        </Group>
        </Content>


        <Content>
        <UsersThree size={35} color= {Color.BLUE_LIGHT} />
        <Subtitle>Convidar amigos</Subtitle>
        </Content>
        </Column>

      </Wrapper>
    </Container>
  )
}