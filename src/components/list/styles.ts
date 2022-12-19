import styled from "styled-components";

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;

  @media (max-width: 910px){
    max-width: 320px;
  overflow: hidden !important;
}
`;
