import styled from "styled-components";
import { Color } from "../utils/colors.app";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`

  width: 100%;
  height: 100%;

  display: flex;
`

export const RoutesWrapper = styled.div`
  width: calc(100% - 80px);
  height: 100%;

  background-color: ${Color.BLUE_LIGHT};
`