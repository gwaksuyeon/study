import React from 'react';

interface Props {
	color?: string;
}
const Save = ({ color = '#000' }: Props) => {
	return (
		<svg fill={color} viewBox="0 0 24 24">
			<g id="active">
				<path d="M8.6,20.1l-7.8-8l1.4-1.4l6.4,6.5L21.8,3.9l1.4,1.4L8.6,20.1z" />
			</g>
		</svg>
	);
};

export default Save;
