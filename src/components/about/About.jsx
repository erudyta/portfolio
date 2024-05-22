import { useState, forwardRef, useEffect } from 'react'
import { learningPath } from '../../js/learning-path.js'
import Bar from '../Bar.jsx'

import './about.css'
const About = forwardRef(function About({}, ref) {
	const [windowSize, setWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	})

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(prev => ({
				...prev,
				height: window.innerHeight,
				width: window.innerWidth,
			}))
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [windowSize])

	return (
		<section ref={ref} id='about' className='abt section'>
			<h1 className='center-text'>About me</h1>
			<div className='underline center-text'></div>
			<div className='container abt-container'>
				<div className='abt-photo'>
					<div className='abt-bgc'>
						<div className='abt-blob-photo'></div>
					</div>
				</div>
				<div className='abt-description'>
					<p>
						I am Kamil Pyszniak, 3 years exprienced PLC Programmer from Puławy, Poland. I have been learning front-end
						programming for 6 months. I am a self-taught person trying to learn the secrets of front-end programming. My
						goal is to work for a company where I will carry out business projects and develop my skills.
					</p>
					<div className='abt-learning-path'>
						<div className='abt-lng-container'>
							<h3 className='center-text'>Learning Path</h3>
							{learningPath.map((path, index) => (
								<div key={index} className='lng-method' data-index={index + 1}>
									<div className='lng-logos'>
										{path.iconsImg.map((logo, index) => (
											<img className='lng-logo' key={index} src={logo} alt={path.imgAlt[index]} />
										))}
									</div>
									<div className='lng-text'>
										<a className='lng-course' href={path.link} target='_blank'>
											{path.description}
										</a>
									</div>
									<div className='lng-bar-container'>
										<div data-percentage={path.completedPercentage} className='lng-bar'>
											<Bar percentage={path.completedPercentage} />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
})

export default About
