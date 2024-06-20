import styled from "styled-components";

import LogoImg from "./logo.png";

const DEFAULT_IMG_WIDTH = "289px";

const LogoComp = styled.img`
    width: ${({ width }) => width};
`;

export const Logo = ({ width = DEFAULT_IMG_WIDTH}) => (
    <LogoComp src={LogoImg} width={width} />
);