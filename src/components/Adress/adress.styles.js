import styled from "styled-components";
import { Color } from "../../utils/colors.app";

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  height: 100%;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${Color.BLUE_SECONDARY};
`
export const Title = styled.h1`
 font-family: 'Quicksand', sans-serif;
 color: #fff;
 text-align: center;
`