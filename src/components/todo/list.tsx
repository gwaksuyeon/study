import React, { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';

import {
	SvgTodoCancel,
	SvgTodoDelete,
	SvgTodoEdit,
	SvgTodoSave,
} from 'assets/svgs';

interface Props {
	data: any;
	onClickEditActiveButton: (index: number, title: string) => void;
	onClickDeleteActiveButton: (index: number) => void;
}
const List = ({
	data,
	onClickEditActiveButton,
	onClickDeleteActiveButton,
}: Props) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [title, setTitle] = useState<string>('');
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const onClickCheckbox = () => {
		setIsChecked(!isChecked);
	};

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		setTitle(value);
	};

	// 수정 버튼 클릭
	const onClickEditButton = () => {
		if (isChecked) {
			return;
		}

		setIsEdit(true);
	};

	// 수정 확인 버튼 클릭
	const onClickEditSaveButton = () => {
		onClickEditActiveButton(data.idx, title);

		setIsEdit(false);
	};

	// 수정 취소 버튼 클릭
	const onClickEditCancelButton = () => {
		setTitle(data.title);
		setIsEdit(false);
	};

	// 삭제 버튼 클릭
	const onClickDeleteButton = () => {
		onClickDeleteActiveButton(data.idx);
		setIsEdit(false);
	};

	useEffect(() => {
		if (data) {
			setIsChecked(data.isChecked);
			setTitle(data.title);
		}
	}, [data]);

	return (
		<Wrapper>
			<CheckBox isChecked={isChecked} onClick={onClickCheckbox} />

			{/* 편집 */}
			{isEdit && <TitleInput value={title} onChange={onChangeTitle} />}

			{!isEdit && <Title isChecked={isChecked}>{title}</Title>}

			<ButtonWrapper>
				{/* 편집 */}
				{isEdit && (
					<>
						<ButtonIcon onClick={onClickEditSaveButton}>
							<SvgTodoSave />
						</ButtonIcon>

						<ButtonIcon onClick={onClickEditCancelButton}>
							<SvgTodoCancel />
						</ButtonIcon>
					</>
				)}

				{!isEdit && (
					<>
						<ButtonIcon onClick={onClickEditButton}>
							<SvgTodoEdit />
						</ButtonIcon>

						<ButtonIcon onClick={onClickDeleteButton}>
							<SvgTodoDelete />
						</ButtonIcon>
					</>
				)}
			</ButtonWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 4px 0;

	& ~ & {
		margin-top: 8px;
	}
`;

const CheckBox = styled.div<{ isChecked?: boolean }>`
	width: 18px;
	height: 18px;
	position: relative;
	border: 1px solid ${({ theme }) => theme.color.primary};
	background: #fff;
	margin-right: 4px;
	cursor: pointer;

	${(props) =>
		props.isChecked &&
		css`
			&::after {
				width: 12px;
				height: 12px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: #000;
				z-index: 1;
				content: '';
			}
		`}
`;

const Title = styled.p<{ isChecked?: boolean }>`
	font-size: 13px;

	${(props) =>
		props.isChecked &&
		css`
			text-decoration: line-through;
		`}
`;

const TitleInput = styled.input`
	border: 1px solid ${({ theme }) => theme.color.border};
	font-size: 13px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
`;

const ButtonIcon = styled.div`
	width: 18px;
	height: 18px;
	cursor: pointer;

	& ~ & {
		margin-left: 4px;
	}
`;

export default List;
