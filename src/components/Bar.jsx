import { styled, keyframes } from 'styled-components'

const StyledBar = styled.div`
	position: relative;
	height: 7px;
	width: ${props => props.$percentage};
	border-radius: 4px;
	background-color: rgb(81, 150, 199);

`

export default function Bar({ percentage }) {
	return <StyledBar $percentage={percentage} />
}
