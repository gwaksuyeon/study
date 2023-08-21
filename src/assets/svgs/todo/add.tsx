import React from 'react';

interface Props {
	color?: string;
}
const Add = ({ color = '#000' }: Props) => {
	return (
		<svg viewBox="0 0 24 24">
			<g id="Edit / Add_Plus">
				<path
					id="Vector"
					d="M6 12H12M12 12H18M12 12V18M12 12V6"
					stroke={color}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export default Add;
