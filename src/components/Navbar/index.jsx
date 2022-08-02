import {
  AddressBook,
  ArrowRight,
  ChatTeardropText,
  GearSix,
  Star,
  Trash,
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
          <Link to={'/contacts'}>
            <AddressBook onClick={() => setCurrentPage('contacts')} size={42} />
          </Link>
          <Star size={42} />
          <Trash size={42} />
          <GearSix size={42} />
        </ContainerDiv>
        <WrapperDiv>
          <ArrowRight size={32} weight='fill' />
        </WrapperDiv>
      </Wrapper>
    </Container>
  );
};
