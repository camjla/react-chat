import {UsersFour, UserPlus, Buildings} from 'phosphor-react';
import { Container, Wrapper, Title, Content,Group, Texts,ListContacts } from "./adress.styles"

import jm from '../../assets/icons-contacts/jm.jpg'
import fernando from '../../assets/icons-contacts/fernando.jpg'
import gustavo from '../../assets/icons-contacts/gustavo.jpg'
import helena from '../../assets/icons-contacts/helena.jpg'
import lucas from '../../assets/icons-contacts/lucas.jpg'
import palfi from '../../assets/icons-contacts/palfi.png'
import eu from '../../assets/icons-contacts/eu.jpg'
import pab from '../../assets/icons-contacts/pab.png'
import steph from '../../assets/icons-contacts/steph.jpg'
import natasha from '../../assets/icons-contacts/natasha.jpg'


export const ListContact = () => {
  return(
    <Container>
      <Wrapper>
      
        <Title>Lista de Contatos</Title>
      
        9 contatos
        <Content>
          <Group>
        <UsersFour size={42} color= '#dcd8d8' />
        <Texts> Novo grupo </Texts>
        </Group>
        <Group>
        <UserPlus size={42} color= '#dcd8d8'  /> <Texts> Novo contato </Texts>
        </Group>
        
        Encontre Empresas
        <Group>
        <Buildings color= '#dcd8d8'  size={42} />
        <Texts>Empresas</Texts>
        </Group>
        </Content>
        <ListContacts>
        <img width='70px' height='70px' src={eu} alt= 'eu' />
        
        <img width='70px' height='70px' src={fernando} alt= 'Fernando' />
        
        <img width='70px' height='70px' src={gustavo} alt= 'Gustavo' />
        
        <img width='70px' height='70px' src={helena} alt= 'Helena' />
        
        <img width='70px' height='70px' src={jm} alt= 'jimin' />
        
        <img width='70px' height='70px' src={lucas} alt= 'Lucas' />
        <img width='70px' height='70px' src={natasha} alt= 'Natasha' />
        
        <img width='70px' height='70px' src={pab} alt= 'pab' />
        
        <img width='70px' height='70px' src={palfi} alt= 'palfi' />
        
        <img width='70px' height='70px' src={steph} alt= 'Steph' />
        </ListContacts>
      </Wrapper>
    </Container>
  )
}