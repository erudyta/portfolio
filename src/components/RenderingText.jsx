import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function RenderingText({ words, ...props }) {
	const [text] = useTypewriter({
		words: words,
		loop: {},
		typeSpeed: 60,
	})

	return (
		<span {...props}>
			{text}
			<Cursor />
		</span>
	)
}
