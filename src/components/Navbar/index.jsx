import {
  AddressBook,
  ArrowRight,
  ChatTeardropText,
  GearSix,
  Star,

} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerDiv, Wrapper, WrapperDiv } from './navbar.styles';

export const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <Container>
      <Wrapper>
        <ContainerDiv>
          <Link to={'/messages'}>
            <ChatTeardropText
              onClick={() => setCurrentPage('messages')}
              size={42}
            />
          </Link>
          <Link to={'/contactsadress'}>
            <AddressBook onClick={() => setCurrentPage('contactsadress')} size={42} />
          </Link>
          <Link to={'/favorites'}>
          <Star onClick={() => setCurrentPage('favorites')}  size={42} />
          </Link>

         

          <Link to={'/settings'}>
          <GearSix onClick={() => setCurrentPage('settings')}  size={42} />
          </Link>
        </ContainerDiv>
        <WrapperDiv>
          <ArrowRight size={32} weight='fill' />
        </WrapperDiv>
      </Wrapper>
    </Container>
  );
};
