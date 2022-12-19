import styled from "styled-components";

import { CThemeProps } from "../../styles";

export const Card = styled.div`
  border: 1px solid ${({ theme }: CThemeProps) => theme.colors.dark};
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  max-width: 548px;
  margin: 0 auto;
  height: 100%;
  gap: 10px;
  display: flex;
  background-color: #3174ee;
  flex-direction: column;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.55);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.55);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.55);

@media (max-width: 910px){
  max-width: 310px;
  width: 100%;
  margin-bottom: 30px;
  height: auto;
  overflow: hidden;
}

@media (max-width: 280px){
  max-width: 250px;
  width: 100%;
}
`;

export const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  color: ${({ theme }: CThemeProps) => theme.colors.white};
  font-size: ${({ theme }: CThemeProps) => theme.size.s18}px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 5px;
`;

export const Subtitle = styled.label`
  color: ${({ theme }: CThemeProps) => theme.colors.white};
  font-size: ${({ theme }: CThemeProps) => theme.size.s13}px;
  font-weight: 600;
  line-height: 18px;
  opacity: 0.8;
  margin-bottom: 15px;
`;

export const Description = styled.label`
  color: ${({ theme }: CThemeProps) => theme.colors.white};
  font-size: ${({ theme }: CThemeProps) => theme.size.s14};
  line-height: 18px;
  opacity: 0.8;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Separator = styled.div`
  margin-bottom: 10px;
`;

export const CardPostedDate = styled.span`
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${({ theme }: CThemeProps) => theme.colors.opacity1};
  color: ${({ theme }: CThemeProps) => theme.colors.white};
`;
