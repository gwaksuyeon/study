import React from 'react';
import { styled } from 'styled-components';
import loadable from '@loadable/component';
import { Link } from 'react-router-dom';
import { ROOT_ROUTE } from 'common/variants';

const Layout = loadable(() => import('components/common/layout'));

const Main = () => {
	return (
		<Layout>
			<Wrapper>
				<Link to={ROOT_ROUTE.TODO}>
					<LinkBox>ToDo</LinkBox>
				</Link>
			</Wrapper>
		</Layout>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const LinkBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	border: 1px solid ${({ theme }) => theme.color.border};
	cursor: pointer;
`;

export default Main;
