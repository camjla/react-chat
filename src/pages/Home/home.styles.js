import styled from "styled-components";
import { Color } from "../../utils/colors.app";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  color: #ffff;
  `

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  
`
export const Content = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;

`
export const ContentContainer = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`

//atente-se ao styled
export const Title = styled.h1`
    text-align:center;
    font-size: 4rem;
    color:${Color.YELLOW_MAIN};
  
`


