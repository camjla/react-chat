import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";
import { Color } from "../../utils/colors.app";

export const Container = styled.div`
  min-width: 80px;
  height: 100%;
  background-color: ${Color.BLUE_MAIN};

  display: flex;
  justify-items: space-between;
  align-items: center;
  
  color: #fff;

  cursor: pointer;
  
`
export  const ContainerDiv = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
 padding: 1rem;
 
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`