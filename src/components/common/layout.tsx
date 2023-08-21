import React from 'react';
import { styled } from 'styled-components';
import loadable from '@loadable/component';

const Header = loadable(() => import('components/common/header'));
const Footer = loadable(() => import('components/common/footer'));

interface Props {
	children?: React.ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<Wrapper>
			<Header />

			<Main>{children}</Main>

			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const Main = styled.div`
	width: 100%;
	flex: 1;
`;

export default Layout;
