import { styled } from 'styled-components'
const StyledA = styled.a`
	display: inline-block;
	padding: 5px 10px;
	color: white;
	background-color: black;
	border-radius: 20px;
	margin-right: 5px;
    pointer-events: ${props => props.$disable ? 'none' : 'auto'};
	transition: background-color .4s;
	& i {
		display: inline;
		text-align: center;
	}

	.styledADsiable {
		color: red;
	}
	&:hover {
		background-color: rgb(81, 150, 199);
	}
`
export default function AButton({ children, link, icon, disable }) {
	return (
		<StyledA target='_blank' href={link} $disable={disable}>
			{children} <i className={icon}></i>
		</StyledA>
	)
}
