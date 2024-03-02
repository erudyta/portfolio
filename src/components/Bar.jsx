import { styled, keyframes } from 'styled-components'

const StyledBar = styled.div`
	position: relative;
	height: 7px;
	width: ${props => props.$percentage};
	border-radius: 4px 0 0 4px;
	background-color: rgba(93, 186, 252);

	&:before {
		content: '${props => props.$percentage}';
		color: white;
		position: absolute;
		top: -32px;
		right: 0;
		padding: 2px 4px;
		background-color: rgb(93, 186, 252);
		font-size: 0.7rem;
		border-radius: 5px;
		transform: translateX(50%);
	}

	&:after {
		content: '';
		position: absolute;
		top: -14px;
		right: 0;
		width: 10px;
		height: 10px;
		background-color: rgb(93, 186, 252);
		transform: translateX(50%) rotate(45deg);
	}
`

export default function Bar({ percentage }) {
	return <StyledBar $percentage={percentage} />
}
