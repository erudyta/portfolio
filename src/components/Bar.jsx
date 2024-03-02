import { styled, keyframes } from 'styled-components'

const StyledBar = styled.div`
	position: relative;
	height: 7px;
	width: ${props => props.$percentage};
	border-radius: 4px;
	background-color: rgba(93, 186, 252);

`

export default function Bar({ percentage }) {
	return <StyledBar $percentage={percentage} />
}
