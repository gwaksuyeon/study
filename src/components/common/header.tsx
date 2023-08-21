import React from 'react';
import { styled } from 'styled-components';

const Header = () => {
	return <Wrapper>header</Wrapper>;
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${({ theme }) => `${theme.size.mobileHeaderHeight}px`};
	position: sticky;
	top: 0;
	border-bottom: 1px solid ${({ theme }) => theme.color.border};
	z-index: ${({ theme }) => theme.zIndex.header};
`;

export default Header;
