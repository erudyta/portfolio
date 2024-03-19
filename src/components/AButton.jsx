import { styled } from 'styled-components'
const StyledA = styled.a`
	display: inline-block;
	padding: 5px 10px;
	color: white;
	background-color: black;
	border-radius: 20px;
	margin-right: 5px;
    pointer-events: ${props => props.$disable ? 'none' : 'auto'};
	& i {
		display: inline;
		text-align: center;
	}

	.styledADsiable {
		color: red;
	}
`
export default function AButton({ children, link, icon, disable }) {
	return (
		<StyledA target='_blank' href={link} $disable={disable}>
			{children} <i className={icon}></i>
		</StyledA>
	)
}
