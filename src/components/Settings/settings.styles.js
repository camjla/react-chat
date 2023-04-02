import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  height: 100%;
`
//exemplo de boa pratica no container referente ao width e o max.
export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 1px;
    background: ${Color.BLUE_MAIN};
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${Color.BLUE_SECONDARY};
`
export const Title = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  color: #fff;
`

export const Hr = styled.hr`
  width: 100%;
  border: solid 1px #ffffff;
  opacity: 60%;
`

export const Column = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  padding: 1rem;
`

export const Subtitle = styled.h3`
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  color: ${Color.BLUE_LIGHT};
`
export const Description = styled.p`
  font-family: 'Quicksand', sans-serif;
  text-align: justify;
  font-size: 13px; //fazer padrão de font
  color: ${Color.GRAY_PLACEHOLDER};
`
export const Group = styled.section`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.325rem;
  cursor: pointer;
`
export const Header = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.625rem;
`
export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.225rem;
`
export const Name = styled.h2`
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  color: #fff;
`

export const Status = styled.span`
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  font-size: 11px;
  color: ${Color.GRAY_PLACEHOLDER};
`
