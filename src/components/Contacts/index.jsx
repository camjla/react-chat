import {PushPin, DotsThreeVertical, Checks} from 'phosphor-react';
import { Container, Wrapper,Content, Title, MessageandIcon, Input,Divider, M_Content, NameContact, Texts, Group, Navbar,Notification, NotificationContent, NotificationContainer, GroupMessage} from "./contacts.styles"
import jm from '../../assets/icons/jm.jpg'
import cobra from '../../assets/icons/cobra.jpg'
import group from '../../assets/icons/group.jpg'
import natasha from '../../assets/icons/natasha.jpg'
import pab from '../../assets/icons/pab.png'
import palfi from '../../assets/icons/palfi.png'
import eu from '../../assets/icons/eu.jpg'



export const Contacts = () => {
  return(
    <Container>
      <Wrapper >
        <Navbar>
        <Title>Mensagens</Title>
        <DotsThreeVertical cursor='pointer'size={25} color='#ffffff'/>
        </Navbar>
        <Content>
        <Input placeholder="Pesquisar ou começar uma nova conversa" />
        </Content>
        <M_Content>
    <img width='50px' height='50px' src={eu} alt= 'eu' />
          <GroupMessage>
      <Group>
      <NameContact>Camila(você)</NameContact>
      <PushPin size={22} color='#ffffff' />
      </Group>
      <MessageandIcon>
      <Checks size={18} />
      <Texts>Médico amanhã as 15h</Texts>
      </MessageandIcon>
      </GroupMessage>
        </M_Content>
      <Divider />
        <M_Content>

       <img width='50px' height='50px' src={jm} alt= 'Jimin' />
       <GroupMessage>
          <NotificationContent>
        <Notification />
       < NotificationContainer>
       
      <NameContact>Baby</NameContact>
      <Texts>Olha gostaria de desabafar com você...</Texts>
      </NotificationContainer>
      </NotificationContent>
      </GroupMessage>
  
        </M_Content>
      <Divider/>
        <M_Content>
        <img width='50px' height='50px' src={palfi} alt= 'eu' />
        <GroupMessage>
      <NameContact>PALFI</NameContact>
      <MessageandIcon>
      <Checks size={18} />
      <Texts>Olha o video que te mandei no insta</Texts>
      </MessageandIcon>
      </GroupMessage>
        </M_Content>
      <Divider />
        <M_Content>
        <img width='50px' height='50px' src={pab} alt= 'eu' />
        <GroupMessage>
      <NameContact >pab farinha lactea</NameContact>
      <MessageandIcon>
      <Checks size={18} />
      <Texts>nn aguento mais minha fanbase</Texts>
      </MessageandIcon>
      </GroupMessage>
        </M_Content>
      <Divider />
      <M_Content>
       <img width='50px' height='50px' src={natasha} alt= 'eu' />
       <GroupMessage>
          <NotificationContent>
        <Notification />
       < NotificationContainer>
      <NameContact>Natasha</NameContact>
      <Texts>Não acredito, como ele fez isso?</Texts>
      </NotificationContainer>
      </NotificationContent>
      </GroupMessage>
        </M_Content>
    <Divider />
       <M_Content>
       <img width='50px' height='50px' src={cobra} alt= 'eu' />
       <GroupMessage>
      <NameContact>só gostosas e venenosas</NameContact>
      <MessageandIcon>

      <Checks size={18} />
      <Texts>FOTO</Texts>
      </MessageandIcon>
      </GroupMessage>
       </M_Content>
    <Divider />
       <M_Content>
       <img width='50px' height='50px' src={group} alt= 'eu' />
       <GroupMessage>
      <NameContact>MTI-Mulheres da tecnologia</NameContact>
      <MessageandIcon>

      <Checks size={18} />
      <Texts>+55 11 9854-9875: ooie, tenho vagas...</Texts>
      </MessageandIcon>
      </GroupMessage>
       </M_Content>
      </Wrapper>
    </Container>
  )
}