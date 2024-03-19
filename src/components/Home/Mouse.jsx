import { styled, keyframes } from 'styled-components'

const scrollAnimation = keyframes`
    from {
        top:5px;
    }
    to{
        top: 15px;
        opacity: 0;
    }
`

const arrowAnimation = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }

    

`

const MouseContainer = styled.div`
    position: absolute;
    bottom: 15px;
    left:50%;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    transform: translate(-50%, 0);
`
const StyledMouse = styled.div`
	position: relative;
	height: 30px;
	width: 20px;
	background: rgb(82, 89, 100); //text-color
	border-radius: 20px;

	&::after {
		content: '';
		position: absolute;
		top: 5px;
		left: 50%;
		height: 7px;
		width: 5px;
		background-color: white; //secondary-color
		border-radius: 50%;
		transform: translate(-50%, 0);
        animation: ${scrollAnimation} 1.3s infinite;
	}
    &::before{
        content: '';
        position: absolute;
        width: 1px;
        height: 10px;
        background-color: white;
		top: 5px;
		left: 50%;
        transform: translate(-50%, 0);
    }
`
const Arrow = styled.span`
	position: relative;
	display: block;
	width: 8px;
	height: 8px;
	border-bottom: 2px solid rgb(82, 89, 100);
	border-right: 2px solid rgb(82, 89, 100);
	transform: rotate(45deg);
    animation: ${arrowAnimation} 1.1s infinite;
    animation-delay: ${props => props.$delay}
`

export default function Mouse() {
	return (
		<MouseContainer>
			<StyledMouse></StyledMouse>
			<Arrow $delay='.2s'/>
			<Arrow $delay='.3s'/>
			<Arrow $delay='.4s'/>
		</MouseContainer>
	)
}
