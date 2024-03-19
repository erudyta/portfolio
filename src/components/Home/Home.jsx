import {forwardRef} from 'react'

import RenderingText from '../RenderingText.jsx'
import Mouse from './Mouse.jsx'

import './home.css'
const Home = forwardRef(function Home({} ,ref) {
	return (
		<section ref={ref} id='home' className='home'>
			<div className='home-container'>
				<div className='home-content'>
					<div className='home-photo'>
						<div className='home-bgc'>
							<div className='home-blob-photo'></div>
						</div>
					</div>
					<h1 className='home-greeting'>Kamil Pyszniak</h1>
					<h3>
						<RenderingText
							words={['Coder', 'React Developer', 'Frontend Developer']}
							style={{ color: 'rgb(81, 150, 199)', textTransform: 'uppercase' }}
						/>
					</h3>
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
					<div className='home-buttons'>
						<a href='#about'>
							About me! <i className='bx bx-right-arrow-alt'></i>
						</a>
					</div>
					<Mouse/>
				</div>
			</div>
		</section>
	)
})

export default Home
