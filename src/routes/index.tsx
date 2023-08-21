import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROOT_ROUTE } from 'common/variants';

const Main = loadable(() => import('pages/main'));
const Todo = loadable(() => import('pages/todo'));

const RootRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROOT_ROUTE.MAIN} element={<Main />} />
				<Route path={ROOT_ROUTE.TODO} element={<Todo />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RootRoutes;
