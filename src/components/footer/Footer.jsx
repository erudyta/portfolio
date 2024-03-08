import './footer.css'
export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<p>Made by:</p>
				<h3 className='footer-copy'>&copy; Kamil Pyszniak</h3>
				<div className='footer-socials'>
					<a href='https://www.facebook.com/reedp.27/' target='_blank' className='social-icon'>
						<i className='bx-footer-icon bx bxl-facebook-square'></i>
					</a>
					<div className='footer-line'></div>
					<a href='https://www.linkedin.com/in/kamil-pyszniak-760710276/' target='_blank' className='social-icon'>
						<i className='bx-footer-icon bx bxl-linkedin-square'></i>
					</a>
					<div className='footer-line'></div>
					<a href='https://github.com/erudyta' target='_blank' className='social-icon'>
						<i className='bx-footer-icon bx bxl-github'></i>
					</a>
				</div>
			</div>
		</footer>
	)
}
