import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import loadable from '@loadable/component';
import { format } from 'date-fns';

import { SvgTodoAdd } from 'assets/svgs';

const Layout = loadable(() => import('components/common/layout'));
const List = loadable(() => import('components/todo/list'));

const Todo = () => {
	const [date, setDate] = useState<string>('');
	const [month, setMonth] = useState<string>('');
	const [year, setYear] = useState<string>('');
	const [days, setDays] = useState<string>('');
	const [listData, setListData] = useState<any>([]);
	const [addText, setAddText] = useState<string>('');

	// 오늘 날짜 조회
	const onReadToday = () => {
		const today = new Date();

		setDate(format(today, 'dd'));
		setMonth(format(today, 'MMM'));
		setYear(format(today, 'yyyy'));
		setDays(format(today, 'EEEE'));
	};

	// 리스트 조회
	const onReadList = () => {
		const res = [
			{
				idx: 1,
				title: '물 3컵 마시기',
				isChecked: false,
			},
			{
				idx: 2,
				title: '운동 하기',
				isChecked: false,
			},
			{
				idx: 3,
				title: '영양제 먹기',
				isChecked: true,
			},
		];

		setListData(res);
	};

	const onChangeAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		setAddText(value);
	};

	// 추가 버튼 클릭
	const onClickAddButton = () => {
		setListData([
			...listData,
			{
				idx: listData.length + 1,
				title: addText,
				isChecked: false,
			},
		]);

		setAddText('');
	};

	// 수정 버튼 클릭
	const onClickEditActiveButton = (index: number, title: string) => {
		const res = listData.map((obj: any) =>
			obj.idx === index
				? {
						...obj,
						title,
				  }
				: obj,
		);

		setListData(res);
	};

	// 삭제 버튼 클릭
	const onClickDeleteActiveButton = (index: number) => {
		const res = listData.filter((f: any) => f.idx !== index);

		setListData(res);
	};

	useEffect(() => {
		onReadToday();
		onReadList();
	}, []);

	return (
		<Layout>
			<Wrapper>
				{/* header */}
				<TopWrapper>
					<DateWrapper>
						<DateText>{date}</DateText>

						<DateRightWrapper>
							<MonthText>{month}</MonthText>
							<YearText>{year}</YearText>
						</DateRightWrapper>
					</DateWrapper>

					<DaysText>{days}</DaysText>
				</TopWrapper>

				{/* list */}
				<ListWrapper>
					{listData.map((obj: any, index: number) => (
						<List
							key={`todo-list-${index}`}
							data={obj}
							onClickEditActiveButton={onClickEditActiveButton}
							onClickDeleteActiveButton={onClickDeleteActiveButton}
						/>
					))}
				</ListWrapper>

				{/* 추가 */}
				<AddWrapper>
					<AddInput value={addText} onChange={onChangeAdd} />

					<AddButton onClick={onClickAddButton}>
						<SvgTodoAdd />
					</AddButton>
				</AddWrapper>
			</Wrapper>
		</Layout>
	);
};

const Wrapper = styled.div`
	width: 500px;
	background: #fff;
	border-radius: 10px;
	padding: 0 32px;
	margin: auto;
`;

const TopWrapper = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.color.border};
	padding-bottom: 8px;
`;

const DateWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: auto;
`;

const DateText = styled.p`
	font-size: 42px;
	font-weight: 700;
`;

const DateRightWrapper = styled.div``;

const MonthText = styled.p`
	font-size: 16px;
	margin-bottom: 2px;
`;

const YearText = styled.p`
	font-size: 14px;
`;

const DaysText = styled.p`
	font-size: 16px;
`;

const ListWrapper = styled.div`
	max-height: 600px;
	overflow-y: auto;
`;

const AddWrapper = styled.div`
	display: flex;
	align-items: center;
	border-top: 1px solid ${({ theme }) => theme.color.border};
	padding-top: 4px;
	margin-top: 8px;
`;

const AddInput = styled.input`
	flex: 1;
	border: 1px solid ${({ theme }) => theme.color.border};
	font-size: 13px;
`;

const AddButton = styled.div`
	width: 18px;
	height: 18px;
	margin-left: 4px;
	cursor: pointer;
`;

export default Todo;
