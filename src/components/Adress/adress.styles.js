import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  height: auto;
`

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
export const Title = styled.h1`
  font-family: 'Quicksand', sans-serif;
  color: #fff;
  text-align: left;
  padding: 1rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.2rem;
  gap: 0.625rem;
`
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
`
export const Texts = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: auto;
  color: ${Color.MESSAGES_COLOR};
  text-align: center;
`
export const ListContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
