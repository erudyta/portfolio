import RenderingText from '../RenderingText.jsx'

import './home.css'
export default function Home() {
	return (
		<section className='home'>
			<div className='container home-container'>
				<div className='home-content'>
					<div className='home-social'>
						<a href='https://www.facebook.com/reedp.27/' target='_blank' className='social-icon'>
							<i className='bx-home-icon bx bxl-facebook-square'></i>
						</a>
						<a href='https://www.linkedin.com/in/kamil-pyszniak-760710276/' target='_blank' className='social-icon'>
							<i className='bx-home-icon bx bxl-linkedin-square'></i>
						</a>
						<a href='https://github.com/erudyta' target='_blank' className='social-icon'>
							<i className='bx-home-icon bx bxl-github'></i>
						</a>
					</div>
					<div className='home-photo'>
						<div className='home-blob-photo'></div>
					</div>
					<div className='home-description'>
						<p className='home-greeting'>Hello, I am</p>
						<h1 className='home-greeting'>Kamil Pyszniak</h1>
						<h3>
							<RenderingText
								words={['Coder', 'React Developer', 'Frontend Developer']}
								style={{ color: 'rgb(255, 118, 108)', textTransform: 'uppercase' }}
							/>
						</h3>
						<div className='underline'></div>
						<p>I am a self-taught person trying to learn the secrets of front-end programming. My goal is to work for a company where I will carry out business projects and develop my skills.</p>
						<div className='home-buttons'>
							<a href="#about">About me! <i className='bx bx-right-arrow-alt'></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
