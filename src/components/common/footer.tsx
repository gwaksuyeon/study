import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
	return <Wrapper>footer</Wrapper>;
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 200px;
	border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export default Footer;
