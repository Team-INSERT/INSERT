import styled, { css } from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0 7.5% 5% 10%;
  flex-direction: column;
`;

export const Title = styled.div`
  ${font.D3}
  letter-spacing: -2px;
  color: ${color.black};
  margin-bottom: 2.5rem;
`;

export const SubTitle = styled.div`
  ${font.H4}
  color: ${color.text};
  width: 30.25rem;
  margin-bottom: 3rem;
`;

export const ProjectLayout = styled.div`
  display: flex;
  border-bottom: 2px solid #d9d9d9;
  padding: 3rem 0;
`;

export const ProjectLogo = styled.img<{ direction: string }>`
  width: 35rem;
  ${(props) =>
    props.direction === "left"
      ? css`
          margin-right: 2rem;
        `
      : css`
          margin-left: 17.5rem;
        `}
`;

export const ProjectTitle = styled.div`
  ${font.D3}
  margin-bottom: 0.5rem;
`;

export const ProjectSubTitle = styled.div`
  ${font.H5}
  color: ${color.text};
  &:first-child {
    margin-bottom: 7.5rem;
  }
`;

export const ProjectContentsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contributors = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const Contributor = styled.img`
  width: 2.5rem;
  margin-right: 0.5rem;
`;
