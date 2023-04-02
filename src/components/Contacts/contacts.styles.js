import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  height: 100%;
`
//exemplo de boa pratica no container referente ao width e o max.

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 1px;
    background: ${Color.BLUE_MAIN};
  }

  background-color: ${Color.BLUE_SECONDARY};
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
  gap: 0.625rem;
`
export const Title = styled.h1`
  font-family: 'Quicksand', sans-serif;
  color: #fff;
  text-align: start;
`
export const Input = styled.input`
  ::placeholder {
    color: ${Color.GRAY_PLACEHOLDER};
    opacity: 0.5;
  }
  border: 2px solid ${Color.BLUE_LIGHT};
  border-radius: 10px;
  background-color: ${Color.BLUE_LIGHT};
  height: 8vh;
  width: 95%;
  color: #fff;
`
export const NameContact = styled.h3`
  font-family: 'Quicksand', sans-serif;
  text-align: left;
  font-size: 18px;
  color: #fff;
`
export const Texts = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  color: ${Color.MESSAGES_COLOR};
  text-align: left;
`
export const Divider = styled.hr`
  width: 100%;
  border: solid 1px #ffffff;
  opacity: 40%;
`
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  gap: 38%;
`
export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`
export const MessageandIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  color: #ffff;
`
export const Notification = styled.div`
  display: flex;
  border: solid 8px ${Color.YELLOW_MAIN};
  border-radius: 50%;
`
export const NotificationContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  align-items: flex-start;
  z-index: 2;
`
export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`
export const GroupMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  z-index: 0;
  gap: 0.35rem;
`
export const M_Content = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  gap: 0.15rem;
  padding: 1rem;
  cursor: pointer;
  :hover {
    background-color: ${Color.BLUE_MAIN};
  }
`
